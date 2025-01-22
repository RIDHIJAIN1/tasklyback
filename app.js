import express from 'express';
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';


import cors from 'cors';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middleware/error.js';


export const app = express();

config({
  path: './data/config.env',
});

// Using middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);


app.use('/api/v1/users', userRouter);
app.use('/api/v1/', taskRouter);


// Using error middleware
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('Nice working');
});
