import React from "react";
import { render, screen, FireEvent, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const formHeader = screen.getByText(/checkout form/i);
  expect (formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  fireEvent.change(firstNameInput, {target : { value: "Clare"}});
  fireEvent.change(lastNameInput, { target: { value: "Jackson" } })
  fireEvent.change(addressInput, { target: { value: "105 Old Altamont Ridge Road" } })
  fireEvent.change(cityInput, { target: { value: "Greenville" } })
  fireEvent.change(stateInput, { target: { value: "SC" } })
  fireEvent.change(zipInput, { target: { value: "29609" } })

  const checkout = screen.getByRole("button");
  fireEvent.click(checkout);

  const successMessage = screen.getAllByTestId('successMessage')
  
});
