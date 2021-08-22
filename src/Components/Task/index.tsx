import { TaskType } from "../../Containers/Board";

export default function Task({ title, desc }: TaskType) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
