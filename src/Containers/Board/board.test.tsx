import { render, screen } from "@testing-library/react";
import Board from ".";

test("should render boards", () => {
  render(
    <Board
      title="title"
      tasks={[
        {
          title: "task title",
          desc: "task desc",
        },
      ]}
    />
  );
  const title = screen.getByText("title");
  expect(title).toBeInTheDocument();

  const taskTitle = screen.getByText("task title");
  expect(taskTitle).toBeInTheDocument();
  const taskDesc = screen.getByText("task desc");
  expect(taskDesc).toBeInTheDocument();
});
