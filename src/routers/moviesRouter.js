import { Router } from "express";
import {createMovie,readMovie,updateMovie,deleteMovie} from "../controllers/moviesController.ts" 
import {validateMovieInput} from "../middleware/validateMovie.ts"
const router = Router();

router.post("/add",validateMovieInput, createMovie);
router.get("/read", readMovie);
router.put("/update", updateMovie);
router.delete("/delete", deleteMovie);

export default router;