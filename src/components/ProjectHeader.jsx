import React, { useState } from "react";
import Filter from "../ui/Filter";

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

function ProjectHeader() {
  const [status, setStatus] = useState("ALL");

  const handleChangeStatus = (value) => {
    setStatus(value);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-secondary-700 mb-8">
      <h1>لیست پروژه ها </h1>
      <Filter options={statusOptions} onChange={handleChangeStatus} currentFilter={status} />
    </div>
  );
}

export default ProjectHeader;
