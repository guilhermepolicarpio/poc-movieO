import { Request, Response } from "express";
import { QueryResult } from "pg";
import { Movie, MovieEntity,MovieStatus } from "../protocols/movies";
import { newMovie,listMovies,deleteMovies,selectMovie,putNewStatus,listMoviesByStatus } from "../repositories/movieRepositoriy.js";


export async function createMovie(req: Request,res: Response){

    const {name,platform,genre,status} = req.body as Movie;
    
    try{

         const insertMovie = await newMovie({name,platform,genre,status})
        
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

    const { id } = req.params;
    const status = req.body.status as MovieStatus;

    try{

        const searchId: number[] = (await selectMovie({id})).rows

        if(searchId.length === 0)
            return res.status(404).send("Movie don't exist")

        const updateStatus:QueryResult = await putNewStatus({status,id})

        return res.send(updateStatus)
    }
        catch (error){
            console.log(error)
            return res.status(500).send("Error connection!")
        }

}

export async function deleteMovie(req: Request,res: Response){

    const {id} = req.params;

    try{
        const findMovie:number[] = (await selectMovie({id})).rows

        if (findMovie.length===0)
            return res.status(404).send("Movie don't exist")

        const delMovie:QueryResult = await deleteMovies({id})

        return res.send(delMovie)
    }
        catch (error){
            console.log(error)
            return res.status(500).send("Error connection!")
        }
    
}

export async function MoviesByStatusView(req:Request, res:Response){

    const {status} = req.query as MovieStatus;

    try{
        const filterMovies: QueryResult<MovieEntity> = await listMoviesByStatus({status})
        const result:MovieEntity[]= filterMovies.rows;

        if(result.length===0){
            return res.status(404).send("No movie to list")
        }

        return res.send(result)

    } catch (error){
        console.log(error)
        return res.status(500).send("Error connection!")
    }
}