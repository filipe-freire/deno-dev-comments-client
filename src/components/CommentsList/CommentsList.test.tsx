import { describe, expect, it } from "vitest";
import { render, screen } from "../../utils/test-utils";
import { CommentsList } from ".";

describe("CommentCard", () => {
  beforeEach(() => {
    render(<CommentsList />);
  });

  it("should render a comment card component", () => {
    expect(screen.getByText("Top Dev Comments")).toBeInTheDocument();
  });
});
