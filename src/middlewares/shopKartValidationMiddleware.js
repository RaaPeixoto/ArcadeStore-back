import { shopKartSchema } from "../models/shopKartSchema";


export async function validateShopKartSchema(req,res,next){
    const {error}=shopKartSchema.validate(req.body,{abortEarly:false});

    if(error){
      const errors = error.details.map((detail)=>detail.message);
      return res.status(422).send(errors);
    }
next();
  }