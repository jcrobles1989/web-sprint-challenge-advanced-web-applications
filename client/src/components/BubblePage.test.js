import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import BubblePage from "./BubblePage";
import FetchBubbles from "./FetchBubbles";

jest.mock("./FetchBubbles");

const bubbleData = {
  colors: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff",
      },
      id: 3,
    },
  ],
};

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  FetchBubbles.mockResolvedValueOnce(bubbleData);

  await act(async () => {
    render(<BubblePage />);
  });

  await waitFor(async () => {
    expect(await screen.findByText(/aliceblue/i)).toBeInTheDocument();
  });
});
