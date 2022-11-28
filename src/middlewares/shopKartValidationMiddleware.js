import { shopKartSchema } from "../models/shopKartSchema.js";


export async function validateShopKartSchema(req,res,next){
    const {error}=shopKartSchema.validate(req.body,{abortEarly:false});
    const { authorization} = req.headers;
    if(!authorization){
      return res.sendStatus(401)
    }
    if(error){
      const errors = error.details.map((detail)=>detail.message);
      return res.status(422).send(errors);
    }
next();
  }