import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 7000;
const app = express();

app.use(express.json());

app.use('/api/todos',todoRoutes);

app.get('/', (req,res)=>{
    res.send('Todo Api is running');
})

app.listen(PORT , ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})