import { useState } from "react";
import Filter from "../ui/Filter";
import Select from "../ui/Select";
import { projects } from "../data/projects";

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

// 

// projects.map()
const categoryOptions = [
  {
    value: "",
    label: "",
  },
];

const sortOptions = [
  {
    label: "تاریخ ایجاد (جدید ترین)",
    value: "created_desc",
  },
  {
    label: "تاریخ ایجاد (قدیمی ترین)",
    value: "created_asc",
  },
  {
    label: "قیمت (صعودی)",
    value: "budget_asc",
  },
  {
    label: "قیمت (نزولی)",
    value: "budget_desc",
  },
  {
    label: "ددلاین (صعودی)",
    value: "deadline_asc",
  },
  {
    label: "ددلاین (نزولی)",
    value: "deadline_desc",
  },
];

// ROLE: USER, ADMIN, MANGAER,..
// STATUS: ALL, OPEN, CLOSED
// SIZE: L, XL, XXL
// ACTIVE:

function ProjectsHeader() {
  const [status, setStatus] = useState("ALL");
  const [category, setCategory] = useState("ALL");
  const [sort, setSort] = useState("created_desc");

  const handleChangeStatus = (value) => {
    setStatus(value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <Filter
        options={statusOptions}
        onChange={handleChangeStatus}
        currentFilter={status}
      />
      <Select
        options={categoryOptions}
        value={category}
        onChange={handleChangeCategory}
      />

      <Select options={sortOptions} value={sort} onChange={() => {}} />
    </div>
  );
}
export default ProjectsHeader;
