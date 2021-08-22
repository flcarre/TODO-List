import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Todo from ".";

test("renders todo link", () => {
  render(
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  );
  const linkElement = screen.getByText(/Todo list/i);
  expect(linkElement).toBeInTheDocument();
});
