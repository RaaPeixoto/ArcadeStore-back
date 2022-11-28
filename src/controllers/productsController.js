import { productsCollection } from "../database/db.js";
import { ObjectId } from "mongodb";
export async function getProducts(req, res) {
const {id} = req.params

    
    try {
   
if (!id){
  const productsList = await productsCollection
    .find()
    .toArray();

  return res.send(productsList);
}
  
      const productById= await productsCollection
  .findOne({
    _id: new ObjectId(id),
  })
  res.send(productById);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
  
  export async function postProduct(req, res) {
 /*   formato de envio 
{"image":"URL  de uma imagem bem legal",
  "banner":"aaaaaaa",
    "title":"Plague Tale",
    "description": "Um jogo muito legal de matar ratos",
    "price": "125",
    "plataforms": ["x-box","playstation","PC"],
    "releaseDate" : "25/11/2022"
  
}

09f02881-dd05-4538-b937-e8cff95e1c73
  
     */

  const {image,banner,title,description,price,plataforms,releaseDate} = req.body;
 

    try {
     
      await productsCollection
        .insertOne({
          image,
          banner,
          title,
          description,
          price,
          plataforms,
          releaseDate,

        })
        
  
      res.sendStatus(200);
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
   const {image,banner,title,description,price,plataforms,releaseDate}= req.body;
  console.log(id)
    try {
      await productsCollection.updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {image,banner,title,description,price,plataforms,releaseDate},
        }
      );
  
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }