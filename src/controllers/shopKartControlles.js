import { shopKartCollection, usersCollection } from "../database/db";

export async function postShopKart(req,res){
    const newBuy = req.body
    const {id} = res.headers
try{
const newBuy = await shopKartCollection.insertOne({user:{id} newBuy});
res.sendStatus(201)    
}catch(err){
console.log(err)
res.sendStatus(401)
}
}

export async function deleteShopKart(req,res){
    

}

