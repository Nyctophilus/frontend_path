import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("render posts if request successes", async () => {
    // -HL Mocking to prevent unnessery changes to server or storage for example
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: "1", title: "hello testing" },
      ],
    });

    render(<Async />);

    const postsArr = await screen.findAllByRole("listitem");
    expect(postsArr).not.toHaveLength(0);
  });
});
