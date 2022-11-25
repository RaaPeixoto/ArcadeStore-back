import { productSchema } from '../models/productSchema.js';

export function validateProductSchema(req,res,next){
    const Joi = require('joi')
    .extend(require('@joi/date'));
  const productSchema = joi.object({
        image:joi.string(),
        title:joi.string().required(),
        description:joi.string().required(),
        price:joi.string().required(),
        plataforms:joi.array().items(joi.string()).required(),
        releaseDate:Joi.date().format('YYYY-MM-DD').utc()
        });

    const {error}=productSchema.validate(req.body,{abortEarly:false});

    if(error){
      const errors = error.details.map((detail)=>detail.message);
      return res.status(422).send(errors);
    }
next();
  }