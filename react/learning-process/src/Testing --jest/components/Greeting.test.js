import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders 'hello!'", () => {
    // Arrage
    render(<Greeting />);
    const hello = screen.getByText(/hello/i);

    // Act
    // ... nothing here , usually would be invoke a button click or smth

    // Assert
    expect(hello).toBeInTheDocument();
  });

  test("renders 'Good to see you' when button is NOT clicked", () => {
    render(<Greeting />);

    const seeYa = screen.getByText(/good to see/i);
    expect(seeYa).toBeInTheDocument();
  });

  test("renders 'Changed!' when button is clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    const btn = screen.getByRole("button");
    userEvent.click(btn);

    // assert
    const changedTxt = screen.getByText("Changed!");
    expect(changedTxt).toBeInTheDocument();
  });

  test("'Good to see you' isn't shown when button is clicked", () => {
    render(<Greeting />);

    const btn = screen.getByRole("button");
    userEvent.click(btn);

    const seeyaTxt = screen.queryByText(/good to see you/i);
    expect(seeyaTxt).toBeNull();
  });
});
