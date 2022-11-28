import joi from "joi"

/* export const checkOutSchema = joi.object({
    image:joi.string().required(),
    title:joi.string().required(),
    }); */
    export const checkOutSchema = joi.object({
        games:joi.array().items({image:joi.string().required(),title:joi.string().required()}).required()
        });


  