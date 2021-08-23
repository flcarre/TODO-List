import { TaskType } from "../../Containers/Board";

export default function Task({ title, desc }: TaskType): JSX.Element {
  return (
    <div className="my-4 p-4 border-blue-300 border rounded">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
