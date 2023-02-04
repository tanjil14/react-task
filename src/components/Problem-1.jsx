import { useState } from "react";
import Problem1Form from "./Problem1/Problem1Form";

const Problem1 = () => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState("all");

  const handleClick = (val) => {
    setShow(val);
  };
  const handleTodo = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, todo];
    });
  };

  // For sort Active task will show 1st then completed task then rest of the task
  const sortedData = todos.sort((a, b) => {
    if (
      a.status.toLowerCase() === "active" &&
      b.status.toLowerCase() !== "active"
    )
      return -1;
    if (
      a.status.toLowerCase() !== "active" &&
      b.status.toLowerCase() === "active"
    )
      return 1;
    if (
      a.status.toLowerCase() === "completed" &&
      b.status.toLowerCase() !== "completed"
    )
      return -1;
    if (
      a.status.toLowerCase() !== "completed" &&
      b.status.toLowerCase() === "completed"
    )
      return 1;
    return 0;
  });

  // Filter For Click
  const filteredData = sortedData.filter((task) => {
    if (show === "all") {
      return task;
    } else if (show === "active") {
      return task.status.toLowerCase() === "active";
    } else {
      return task.status.toLowerCase() === "completed";
    }
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-7">
          <Problem1Form addTodo={handleTodo} />
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData &&
                filteredData.map((list, index) => (
                  <tr key={index}>
                    <td>{list.name}</td>
                    <td>{list.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
