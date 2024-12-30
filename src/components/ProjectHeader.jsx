import React, { useState } from "react";
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

const categories = projects.map((item) => {
  return {
    value: item.category.englishTitle,
    label: item.category.title,
  };
});

const transFormedCategories = [
  {
    value: "ALL",
    label: "دسته بندی (همه)",
  },
  ...categories,
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

function ProjectHeader({ status, category, sort, onChangeStatus, onChangeCategory, onChangeSort }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-secondary-700 mb-8">
      <h1>لیست پروژه ها </h1>
      <Filter options={statusOptions} onChange={onChangeStatus} currentFilter={status} />
      <Select options={transFormedCategories} value={category} onChange={onChangeCategory} />

      <Select options={sortOptions} value={sort} onChange={onChangeSort} />
    </div>
  );
}

export default ProjectHeader;
