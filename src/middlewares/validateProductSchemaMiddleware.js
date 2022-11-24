import joi from "joi";
import { productSchema } from "../models/productSchema";
 /* formato de envio {
  "image":"URL  de uma imagem bem legal"
    "title":"Plague Tale",
    "description": "Um jogo muito legal de matar ratos",
    "price": 125,
    "plataforms": [x-box,playstation,PC]
    releaseDate : 25/11/2022 */

  export function validateProductSchema(req,res,next){
    const {error}=productSchema.validate(req.body,{abortEarly:false});

    if(error){
      const errors = error.details.map((detail)=>detail.message);
      return res.status(422).send(errors);
    }
next();
  }