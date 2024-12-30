import toLocalDateShort from "../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../utils/toPersianNumbers";
import truncateText from "../utils/truncateText";

function ProjectTable({ filteredProjects }) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>تاریخ ایجاد</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => {
            return (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>{truncateText(project.title, 30)}</td>
                <td>{project.category.title}</td>
                <td>{toPersianNumbersWithComma(project.budget)}</td>
                <td>{toLocalDateShort(project.createdAt)}</td>
                <td>{toLocalDateShort(project.deadline)}</td>
                <td>
                  <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                    {project.tags.map((tag) => {
                      return (
                        <span className="badge badge--secondary" key={tag}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td>{project.status === "OPEN" ? <span className="badge badge--success">باز</span> : <span className="badge badge--danger">بسته</span>}</td>
                <td>-</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ProjectTable;
