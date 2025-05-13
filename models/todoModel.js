import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, 'Please add a title'],
    },
    description:{
        type:String,
        required: [true, 'Please add a description'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
},{
    timestamps:true,
});

const Todo = mongoose.model('Todo',todoSchema);
export  default  Todo;