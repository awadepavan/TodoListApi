import express from "express";
import {createTodo,getTodos,getTodo,updateTodo,deleteTodo} from "../controllers/todoController.js";

const router = express.Router();

// Define routes for CRUD operations
router.post('/', createTodo);          // Create a new Todo
router.get('/', getTodos);             // Get all Todos
router.get('/:id', getTodo);           // Get a single Todo by ID
router.put('/:id', updateTodo);        // Update a Todo
router.delete('/:id', deleteTodo);     // Delete a Todo

export default router;