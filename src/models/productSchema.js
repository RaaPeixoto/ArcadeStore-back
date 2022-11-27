import joi from "joi"

export const productSchema = joi.object({
    image:joi.string(),
    banner:joi.string(),
    title:joi.string().required(),
    description:joi.string().required(),
    price:joi.string().required(),
    plataforms:joi.array().items(joi.string()).required(),
    /* releaseDate:Joi.date().format('YYYY-MM-DD').utc() */
    releaseDate:joi.string().required()
    });