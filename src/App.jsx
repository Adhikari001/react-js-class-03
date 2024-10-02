import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectState((currentState) => ({
      ...currentState,
      selectedProjectId: null,
    }));
  }

  function handelAddProject(projectData) {
    const projectId = Math.random();
    const newProject = { ...projectData, id: projectId };
    setProjectState((currentState) => ({
      ...currentState,
      projects: [...currentState.projects, newProject],
    }));
  }

  function handelCancelAddProject() {
    setProjectState((currentState) => ({
      ...currentState,
      selectedProjectId: undefined,
    }));
  }

  return (
    <main className="h-screen flex gap-8 ">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {projectState.selectedProjectId === undefined ? (
        <NoProjectSelected onStartAddProject={handleStartAddProject} />
      ) : (
        <NewProject handelCancelAddProject={handelCancelAddProject} />
      )}
    </main>
  );
}

export default App;
