import { ObjectId } from "mongodb";
import { checkOutCollection } from "../database/db";

export async function postCheckOut(req,res){
const {id} = req.headers
const productCheckOut = req.body
try{
await checkOutCollection.insertOne({product:productCheckOut, user:id})
res.sendStatus(201)
}catch(err){
    console.log(err)}
    res.sendStatus(501)

}

export async function getCheckOut(req,res){
    
    try{

    }catch(err){
        console.log(err)}
    
    }

}

export async function deleteCheckOut(req,res){
    try{

    }catch(err){
        console.log(err)}
    
    }

}