import { ObjectId } from "mongodb";
import { sessionsCollection, usersCollection } from "../database/db.js";
import {v4 as uuidV4} from "uuid"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
export async function signIn(req, res) {
   const user = res.locals.user;
  
  const token = uuidV4(); 

  try {
    await sessionsCollection.insertOne({token, userId: user._id,type:user.type}) 
    res.status(201).send(token)
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
}

export async function signUp(req, res) {
  const user = res.locals.user;

  const passwordHash = bcrypt.hashSync(user.password, 10)
 
  try {
    await usersCollection.insertOne({...user, password:passwordHash});
  
   res.sendStatus(201);
   
  } catch (err) {
    
    console.log(err);
    res.sendStatus(500);
  }
}

export async function updateUser(req,res){
const newUser = res.locals.newUser;
const {id} = req.params;

try{
  await usersCollection.updateOne({_id:ObjectId(id)}, {$set:newUser});

  res.sendStatus(200)
}catch(err){
  console.log(err);
  res.sendStatus(500);
}


}