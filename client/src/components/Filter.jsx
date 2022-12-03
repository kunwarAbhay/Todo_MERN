import React from "react";

const Filter = ({ todoActive, tab, changeTab, clearCompleted }) => {
  return (
    <div className="flex justify-between items-center p-4 text-[#777a92] text-[hsl(233, 14%, 35%)] bg-[#25273c]">
      <div>{todoActive} items left</div>
      <div className="flex gap-4">
        <button
          className={`tab ${!tab.all || "tab--active"}`}
          onClick={() => changeTab("all")}
        >
          All
        </button>
        <button
          className={`tab ${!tab.active || "tab--active"}`}
          onClick={() => changeTab("active")}
        >
          Active
        </button>
        <button
          className={`tab ${!tab.completed || "tab--active"}`}
          onClick={() => changeTab("completed")}
        >
          Completed
        </button>
      </div>
      <button className="tab" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default Filter;
