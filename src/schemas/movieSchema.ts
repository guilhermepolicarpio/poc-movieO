import Joi from "joi"

export const movieSchema = Joi.object({
    name: Joi.string().min(3).required(),
    platform:Joi.number().required(),
    gender:Joi.string().min(3).required(),
    status: Joi.boolean()
})