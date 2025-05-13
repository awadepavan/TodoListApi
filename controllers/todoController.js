import Todo from "../models/todoModel.js";

const createTodo = async (req,res)=>{
    try {
        const {title,description} = req.body;
        const todo= await Todo.create({title,description});
        res.status(201).json(todo);
    }catch (e) {
        res.status(400).json({message:e.message});
    }
};

const getTodos = async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }catch (e) {
        res.status(400).json({message:e.message});
    }
}

// Get a single To-Do by ID
const getTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateTodo = async(req,res)=>{
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }catch (e) {
        res.status(400).json({message:e.message});
    }
};

const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createTodo, getTodos, getTodo, updateTodo, deleteTodo };