import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 py-16 px-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md;text-xl">Your Projects</h2>
      <ul>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </ul>
    </aside>
  );
}
