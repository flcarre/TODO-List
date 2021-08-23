type ButtonProps = {
  label: string;
};

export default function Button({ label, ...args }: ButtonProps): JSX.Element {
  return (
    <button className="px-6 py-2 bg-blue-400 rounded cursor-pointer text-center text-white font-bold">
      {label}
    </button>
  );
}
