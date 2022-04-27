import { describe, expect, it } from "vitest";
import { render, screen } from "../../utils/test-utils";
import { CommentCard } from ".";

describe("CommentCard", () => {
  beforeEach(() => {
    render(<CommentCard />);
  });

  it("should render a comment card component", () => {
    expect(screen.getByText("Top Dev Comments")).toBeInTheDocument();
  });
});
