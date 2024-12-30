import ProjectsHeader from "./components/ProjectsHeader";
import ProjectTable from "./components/ProjectTable";

function App() {
  return (
    <div className="flex justify-center pt-20 p-4">
      <div className="max-w-screen-lg w-full">
        <ProjectsHeader />
        <ProjectTable />
      </div>
    </div>
  );
}

export default App;
