import { useState } from "react";
import ProjectHeader from "./components/ProjectHeader";
import ProjectTable from "./components/ProjectTable";
import { projects } from "./data/projects";

function App() {
  const [status, setStatus] = useState("ALL");
  const [category, setCategory] = useState("ALL");
  const [sort, setSort] = useState("created_desc");

  const handleChangeStatus = (value) => {
    setStatus(value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };
  const handleSort = (a, b) => {
    switch (sort) {
      case "created_desc": // latest => B - A
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case "created_asc": // earliest => A - B
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case "deadline_desc": // latest => B - A
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case "deadline_asc": // earliest => A - B
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case "budget_desc":
        return b.budget - a.budget;
      case "budget_asc":
        return a.budget - b.budget;
    }
  };

  const filteredProjects = projects
    .filter((p) => (status === "ALL" ? true : p.status === status))
    .filter((p) => (category === "ALL" ? true : p.category.englishTitle === category))
    .sort(handleSort);
  return (
    <div className="flex justify-center pt-20 p-4">
      <div className="max-w-screen-lg w-full">
        <ProjectHeader status={status} category={category} sort={sort} onChangeCategory={handleChangeCategory} onChangeStatus={handleChangeStatus} onChangeSort={handleChangeSort} />
        <ProjectTable filteredProjects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;
