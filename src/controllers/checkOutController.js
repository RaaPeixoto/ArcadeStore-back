import { ObjectId } from "mongodb";
import {sessionsCollection, checkOutCollection, shopKartCollection } from "../database/db.js";

export async function postCheckOut(req,res){

const { authorization } = req.headers;
const token = authorization?.replace("Bearer ", ""); 
const user = await sessionsCollection.findOne({token});
const games = req.body.games;

const checkoutObj= {
games,
userId:user.userId
}

try{
  
await checkOutCollection.insertOne(checkoutObj)
await shopKartCollection.deleteMany({userId:user.userId})
res.sendStatus(201)
}catch(err){
    console.log(err)
    res.sendStatus(404)
}
    

}

export async function getCheckOut(req,res){
    const user = res.locals.user;
   
    try{
    const userCheckOut = await checkOutCollection.find({userId:user.userId}).toArray();
    res.send(userCheckOut)
}catch(err){
        console.log(err)
        res.sendStatus(500)
    }
    try{

    }catch(err){
        console.log(err)}
    
    }




