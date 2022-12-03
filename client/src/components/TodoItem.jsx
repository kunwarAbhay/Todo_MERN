import React from "react";
import { BsCircle, BsXCircle, BsCheckCircleFill } from "react-icons/bs";

const TodoItem = ({ id, todo, deleteTodo, markCompleted, markActive }) => {
  return (
    <div
      key={id}
      className="flex justify-between items-center p-4 text-white bg-[#25273c]"
    >
      <div className="flex justify-left items-center gap-4">
        <button className="text-lg">
          {todo.completed ? (
            <BsCheckCircleFill onClick={() => markActive(id)} />
          ) : (
            <BsCircle onClick={() => markCompleted(id)} />
          )}
        </button>
        <div className={todo.completed ? "line-through" : ""}>{todo.item}</div>
      </div>

      <button onClick={() => deleteTodo(id)} className="text-lg">
        <BsXCircle />
      </button>
    </div>
  );
};

export default TodoItem;
