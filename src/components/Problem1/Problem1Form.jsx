import { useState } from "react";

const Problem1Form = ({ addTodo }) => {
  const [data, setData] = useState({
    name: "",
    status: "",
  });
  const handleChange = (event) => {
   if(event.target.value){
    setData((oldData) => {
        return { ...oldData, [event.target.name]: event.target.value };
      });
   }
  };
  const handleForm = (event) => {
    event.preventDefault();
    addTodo(data);
    event.target.reset();
  };
  return (
    <form
      className="row gy-2 align-items-center mb-4"
      onSubmit={handleForm}
    >
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
      </div>
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Status"
          name="status"
          onChange={handleChange}
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Problem1Form;
