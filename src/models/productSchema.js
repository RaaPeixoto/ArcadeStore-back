import joi from "joi";

 /* formato de envio {
  "image":"URL  de uma imagem bem legal"
    "title":"Plague Tale",
    "description": "Um jogo muito legal de matar ratos",
    "price": 125,
    "plataforms": [x-box,playstation,PC]
    releaseDate : 25/11/2022 */

 
  export const productSchema = joi.object({
        image:joi.string(),
        title:joi.string().required(),
        description:joi.string().required(),
        price:joi.string().required(),
        plataforms:joi.array().items(joi.string()).required(),
        releaseDate:Joi.date().format('YYYY-MM-DD').utc()
        });

  