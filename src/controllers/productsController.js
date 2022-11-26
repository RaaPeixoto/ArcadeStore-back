import { productsCollection } from "../database/db.js";

export async function getProducts(req, res) {
const {id} = req.params

  
  .toArray();
    
    try {
     if (!id){
      const productsList = await productsCollection
        .find()
        .toArray();
  
      return res.send(productsList);
    }
      const productById= await productsCollection
  .find({
    _id: new ObjectId(id),
  })
  res.send(productById);
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
 

    try {
     
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
  
      res.status(200),send(productsList);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    } 
  }

  export async function deleteProduct(req, res) {
    const { id } = req.params;
    
    try {
      await productsCollection.deleteOne({
        _id: new ObjectId(id),
      });
  
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  export async function updateProduct(req, res) {
    
    const { id } = req.params;
   const productUpdate = req.body;
  
    try {
      await productsCollection.updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {productUpdate},
        }
      );
  
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }