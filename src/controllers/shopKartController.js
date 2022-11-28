import { sessionsCollection, shopKartCollection} from "../database/db.js";
import { ObjectId } from "mongodb";
export async function postShopKart(req, res) {
  const productSelect = req.body;
<<<<<<< HEAD:src/controllers/shopKartController.js
  const { id } = req.headers;
=======
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", ""); 
  const user = await sessionsCollection.findOne({token});
 
>>>>>>> main:src/controllers/shopKartControlles.js
  try {
    await shopKartCollection.insertOne({ product: productSelect, userId:user.userId});
    
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
}

export async function deleteItemShopKart(req, res) {
  const { id} = req.params; 
  try {
    await shopKartCollection.deleteOne({_id: new ObjectId(id)});
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(501);
  }
}

export async function getShopKart(req,res){
    const user = res.locals.user;
    console.log(user.userId)
    try{
    const userShopKart = await shopKartCollection.find({userId:user.userId}).toArray();
    res.send(userShopKart)
}catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}