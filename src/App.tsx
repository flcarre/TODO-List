import { RecoilRoot, atom } from "recoil";
import Todo from "./Pages/Todo";

const tasksDummy = [
  { title: "Tasks title 1", desc: "task desc 1" },
  { title: "Tasks title 2 ", desc: "task desc 2" },
  { title: "Tasks title 3", desc: "task desc 3" },
  { title: "Tasks title 4", desc: "task desc 4" },
];

export const todoTasksState = atom({
  key: "todoTasksState",
  default: tasksDummy,
});

export const doneTasksState = atom({
  key: "doneTasksState",
  default: tasksDummy,
});

function App() {
  return (
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  );
}

export default App;
