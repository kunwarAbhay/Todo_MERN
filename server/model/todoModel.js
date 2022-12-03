import mongoose from "mongoose";
const { Schema, model } = mongoose;

const todoSchema = new Schema({
  item: String,
  completed: Boolean,
  active: Boolean,
});

const Todo = new model("ToDo", todoSchema);
export default Todo;
