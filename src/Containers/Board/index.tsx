import Button from "../../Components/Button";
import Task from "../../Components/Task";

export type TaskType = { title: string; desc: string };
type BoardProps = { title: string; tasks: TaskType[] };

export default function Board({ title, tasks }: BoardProps): JSX.Element {
  return (
    <div className="p-8 m-8 border border-green-300 rounded">
      <div className="flex flex-row justify-between w-full">
        <h2 data-testid="title">{title}</h2>
        <Button label="Ajouter une tâche" />
      </div>
      {tasks.map(
        ({ title, desc }: TaskType): JSX.Element => (
          <Task title={title} desc={desc} />
        )
      )}
    </div>
  );
}
