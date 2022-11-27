import joi from "joi"

export const shopKartSchema = joi.object({
    image:joi.string().required(),
    price: joi.string().required(),
    title:joi.string().required()
    
})