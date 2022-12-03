import ToDo from "../model/todoModel.js";

const getAllTodo = async (req, res) => {
  try {
    const allTodo = await ToDo.find({});
    res.json({ message: "success", allTodo, type: "GET" });
  } catch (err) {
    res.status(500).json({ message: "failed", type: "GET" });
  }
};

const getTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await ToDo.findById(id);
    res.json({ message: "success", todo, type: "GET" });
  } catch (err) {
    res.status(500).json({ message: "failed", type: "GET" });
  }
};

const createTodo = async (req, res) => {
  const { item, completed, active } = req.body;

  try {
    await ToDo.create({
      item,
      completed,
      active,
    });

    res.json({ message: "success", type: "POST" });
  } catch (err) {
    res.status(500).json({ message: "failed", type: "POST" });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { item, completed, active } = req.body;

  try {
    await ToDo.findByIdAndUpdate(id, { item, completed, active });
    res.json({ message: "success", type: "PATCH" });
  } catch (err) {
    res.status(500).json({ message: "failed", type: "GET" });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await ToDo.findByIdAndDelete(id);
    res.json({ message: "success", type: "DELETE" });
  } catch (err) {
    res.status(500).json({ message: "failed", type: "DELETE" });
  }
};

const deleteAllTodo = async (req, res) => {
  try {
    await ToDo.remove({});
    res.json({ message: "success", type: "DELETE" });
  } catch (err) {
    res.status(500).json({ message: "failed", type: "DELETE" });
  }
};

export {
  getAllTodo,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodo,
};
