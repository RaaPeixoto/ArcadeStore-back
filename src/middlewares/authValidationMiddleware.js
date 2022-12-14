import { usersCollection,sessionsCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { ObjectId } from 'mongodb';
import { userSchema } from '../models/usersSchema.js';

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
    res.locals.user = user;
    
  } catch (err) {
    console.log(err);
  }
  next();
}


export async function signUpValidation(req, res, next) {
const {name,email,password,passwordConfirm,type} = req.body;

const isRegistered = await usersCollection.findOne({email});
if(isRegistered){
  return res.status(409).send("Email já cadastrado!")
}
const user = {
name,
email,
password,
passwordConfirm,
type: !type?"user" : type,
};


const {error} = userSchema.validate(user, {abortEarly:false});

if(error){
  const erros = error.details.map((detail)=>detail.message);
  return res.status(400).send(erros);  
}
delete user.passwordConfirm;
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
    if(!session){
      return res.sendStatus(401);
    }
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
