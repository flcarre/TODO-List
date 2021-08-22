import { atom, useRecoilValue } from "recoil";
import { doneTasksState, todoTasksState } from "../../App";
import Board from "../../Containers/Board";

export default function Todo() {
  const todoTasks = useRecoilValue(todoTasksState);
  const doneTasks = useRecoilValue(doneTasksState);

  return (
    <div className="w-screen h-screen p-16">
      <h1 className="pb-8">Todo list</h1>
      <div className="flex flex-row">
        <Board title="To do" tasks={todoTasks} />
        <Board title="Done" tasks={doneTasks} />
      </div>
    </div>
  );
}
