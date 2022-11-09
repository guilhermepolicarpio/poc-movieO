import dotenv from "dotenv";
import express from "express";
import moviesRouter from "./routers/moviesRouter.js"

dotenv.config();

const server = express();
server.use(express.json());

server.use(moviesRouter)

const PORT = process.env.PORT;

server.listen(PORT, ()=> {
    console.log(`Server listening on port ${process.env.PORT}`)
});