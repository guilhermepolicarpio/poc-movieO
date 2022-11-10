import { NextFunction } from "express";
import { movieSchema } from "../schemas/movieSchema.js";

function validateMovieInput(req: Request,res: Response,next: NextFunction){

    const newMovie = req.body;
    const joiValidation = movieSchema.validate(newMovie,{abortEarly: false});

    if(joiValidation.error){
        const errorMessage = joiValidation.error.details.map(detail => detail.message);
        console.log(errorMessage)
    }

    next()
}

export {validateMovieInput}