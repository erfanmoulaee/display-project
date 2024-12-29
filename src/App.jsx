import ProjectTable from "./components/ProjectTable";
import ProjectHeader from "./components/ProjectHeader";

function App() {
  return (
    <div className="flex justify-center pt-20 p-4">
      <div className="max-w-screen-lg w-full">
        <ProjectHeader />
        <ProjectTable />
      </div>
    </div>
  );
}

export default App;
