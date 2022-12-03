import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Header from "./components/Header";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoActive, setTodoActive] = useState(0);

  const [tab, setTab] = useState({
    all: true,
    active: false,
    completed: false,
  });

  const changeTab = (tab) => {
    const tabs = { all: false, active: false, completed: false };
    tabs[tab] = true;
    setTab(tabs);
  };

  const getAllTodo = () => {
    console.log("Fecth all todo data");
    fetch("http://localhost:5000/todo")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTodoItems(data.allTodo);
        setTodoActive(
          todoItems.reduce((acc, curr) => acc + (!curr.completed ? 1 : 0), 0)
        );
      });
  };

  const addTodo = (e, item) => {
    e.preventDefault();

    const data = { item, completed: false, active: true };

    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllTodo();
      });
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:5000/todo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllTodo();
      });
  };

  const markCompleted = (id) => {
    fetch(`http://localhost:5000/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true, active: false }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllTodo();
      });
  };

  const markActive = (id) => {
    fetch(`http://localhost:5000/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: false, active: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllTodo();
      });
  };

  const clearCompleted = () => {
    todoItems.forEach((todo) => todo.completed && deleteTodo(todo._id));
    getAllTodo();
  };

  useEffect(() => {
    getAllTodo();
  }, []);

  return (
    <div className="App flex flex-col items-center mt-6 md:mt-16">
      {/* Header */}
      <Header />

      {/* Input Form */}
      <Form addTodo={addTodo} />

      <div className="flex flex-col w-full max-w-lg shadow-lg">
        {/* Todolist */}
        <TodoList
          todoItems={todoItems}
          tab={tab}
          deleteTodo={deleteTodo}
          markCompleted={markCompleted}
          markActive={markActive}
        />

        {/* Filter */}
        <Filter
          todoActive={todoActive}
          tab={tab}
          changeTab={changeTab}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
