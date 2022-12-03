import React from "react";
import { useState } from "react";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="w-full max-w-lg mb-6">
      <form onSubmit={(e) => addTodo(e, todo)}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="px-4 py-2 w-full shadow-lg"
        ></input>
      </form>
    </div>
  );
};

export default Form;
