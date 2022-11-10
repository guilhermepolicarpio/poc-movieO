import { Request, Response } from "express";
import { Movie } from "../protocols/movies";
import { newMovie,listMovies } from "../repositories/movieRepositoriy.js";


export async function createMovie(req: Request,res: Response){

    const {name,idPlatform,gender,status} = req.body as Movie;
    
    
    try{
        console.log("olaaaa")
         const insertMovie = await newMovie({name,idPlatform,gender,status})
         console.log(insertMovie)
         return res.sendStatus(201);

    }catch (error){
        console.log(error)
        return res.status(500).send("Error connection!")
    }
}

export async function readMovie(req: Request,res: Response){

    try{
        const result = (await listMovies()).rows;
        return res.send(result)

    }
    catch (error){
        console.log(error)
        return res.status(500).send("Error connection!")
    }

}

export async function updateMovie(req: Request,res: Response){


}

export async function deleteMovie(req: Request,res: Response){


}