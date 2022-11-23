import { productsCollection } from "../database/db.js";

export async function getProducts(req, res) {
   
    
    try {
     
      const productsList = await productsCollection
        .find()
        .toArray();
  
      res.send(productsList);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
  
  export async function postProduct(req, res) {
 /*   formato de envio {
  "image":"URL  de uma imagem bem legal"
    "title":"Plague Tale",
    "description": "Um jogo muito legal de matar ratos",
    "price": 125,
    "plataforms": [x-box,playstation,PC]
    releaseDate : 25/11/2022

  }
     */

  const {image,title,description,price,plataforms} = req.body;
  const {authorization} = req.headers;

    /* try {
     
      const productsList = await productsCollection
        .insertOne({
          image,
          title,
          description,
          price,
          plataforms,
          releaseDate,

        })
        .toArray();
  
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    } */
  }