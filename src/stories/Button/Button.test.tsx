import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

test("button click ok", async () => {
  const mockFn = jest.fn();
  render(<Button text="test" onClick={mockFn} />);
  await userEvent.click(screen.getByText("test"));
  expect(mockFn.mock.calls.length).toBe(1);
});
