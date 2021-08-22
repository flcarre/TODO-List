import Task from "../../Components/Task";

export type TaskType = { title: string; desc: string };
type BoardProps = { title: string; tasks: TaskType[] };

export default function Board({ title, tasks }: BoardProps): JSX.Element {
  return (
    <div className="px-16">
      <h2 data-testid="title">{title}</h2>
      {tasks.map(({ title, desc }: TaskType) => (
        <Task title={title} desc={desc} />
      ))}
    </div>
  );
}
