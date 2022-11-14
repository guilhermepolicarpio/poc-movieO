import Joi from "joi"

export const movieSchema = Joi.object({
    name: Joi.string().min(3).required(),
    platform:Joi.string().min(3).required(),
    gender:Joi.string().min(3).required(),
    status: Joi.boolean()
})