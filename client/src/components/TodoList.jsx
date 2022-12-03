import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todoItems,
  tab,
  deleteTodo,
  markCompleted,
  markActive,
}) => {
  return (
    <div>
      {todoItems
        .filter((toDoItem) => {
          if (tab.active && toDoItem.active) return true;
          else if (tab.active) return false;

          if (tab.completed && toDoItem.completed) return true;
          else if (tab.completed) return false;

          return true;
        })
        .map((toDoItem) => {
          return (
            <TodoItem
              key={toDoItem._id}
              id={toDoItem._id}
              todo={toDoItem}
              deleteTodo={deleteTodo}
              markCompleted={markCompleted}
              markActive={markActive}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
