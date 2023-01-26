/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { Slot, Plug } from "../src";
import { SlotProvider } from "../src/slots";

test('<Plug /> should require context', () => {
  expect(() => {
    render(
      <Plug slot="test" id="test">
        test
      </Plug>
    );
  }).toThrow(/usePlug hook outside of/)
});


test('<Slot /> should require context', () => {
  expect(() => {
    render(<Slot name="test"/>)
  }).toThrow(/useSlot hook outside of/)
});

test('<Slot /> passes params to children', () => {
  const params = {
    text: "test",
    number: 1234
  };

  render(
    <SlotProvider>
      <Slot<typeof params> name="test" params={params} />
      <Plug<typeof params> slot="test" id="foo">
        {({text, number}) => (
          <div data-testid="plug">
            {text} {number}
          </div>
        )}
      </Plug>
    </SlotProvider>
  );

  expect(screen.getByTestId('plug').textContent)
    .toBe(`${ params.text } ${ params.number }`)
});
