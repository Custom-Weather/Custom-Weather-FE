import React from "react"
import {render, cleanup} from '@testing-library/react'
import LocationForm from './LocationForm';

afterEach(cleanup)

 it('should take a snapshot', () => {
    const { asFragment } = render(<LocationForm />)

    expect(asFragment(<LocationForm />)).toMatchSnapshot()
  })




// it("renders correctly", () => {
//   const {queryByTestId, queryByPlaceholderText} = render(<LocationForm/>)
//
//   expect(queryByTestId("location-input")).toBeTruthy()
//   expect(queryByPlaceholderText("Type in city and state")).toBeTruthy()
// })
//
// describe("Input value", () => {
//   it("updates on change", () => {
//     const {queryByPlaceholderText} = render(<LocationForm/>)
//
//     const searchInput = queryByPlaceholderText('Type in city and state');
//
//     fireEvent.change(searchInput, {target: {value: "test"}})
//
//     expect(searchInput.value).toBe("test")
//   })
// })
