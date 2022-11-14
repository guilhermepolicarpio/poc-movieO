import { Router } from "express";
import {createMovie,readMovie,updateMovie,deleteMovie,MoviesByStatusView} from "../controllers/moviesController.ts" 
import {validateMovieInput} from "../middleware/validateMovie.ts"
const router = Router();

router.post("/add",validateMovieInput, createMovie);
router.get("/read", readMovie);
router.put("/update/:id", updateMovie);
router.delete("/delete/:id", deleteMovie);
router.get("/read/status",MoviesByStatusView);

export default router;