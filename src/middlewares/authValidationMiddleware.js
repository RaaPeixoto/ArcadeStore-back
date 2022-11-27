import jwt from 'jsonwebtoken';
import { usersCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { ObjectId } from 'mongodb';


export async function signInValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.sendStatus(401);
    }
    const passwordConfirm = bcrypt.compareSync(password, user.password);
    if (!passwordConfirm) {
      return res.sendStatus(401);
    }
    res.local.user = user;
  } catch (err) {
    console.log(err);
  }
  next();
}


export async function signUpValidation(req, res, next) {
const {name,email,password,passwordConfirm,type} = req.body;

const user = {
name,
email,
password,
passwordConfirm,
type: !type?"user" : type,
};
const {error} = userSchema.validate(user, {abortEarly:false});
const newEmail = await usersCollection.findOne(email)
if(newEmail){
  return res.sendStatus(501)
}
if(error){
  const erros = error.details.map((detail)=>detail.message);
  return res.status(400).send(erros);  
}
res.locals.user = user;
next();
}

export async function authRoutersValidation(req,res,next){
  const {authorization} = req.headers
  const token = authorization?.replace("Bearer", "");
  if(!token){
    return res.sendStatus(401);
  }
  try{
    const session = await sessionsCollection.findOne({token});
    const user = await usersCollection.findOne({_id:session?.userId})
    if(!user){
      return res.sendStatus(401);
    }
    res.locals.user = user;
  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}

export async function updateUserValidation(){



}
