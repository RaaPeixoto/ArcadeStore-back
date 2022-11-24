import joi from "joi";
import jwt from 'jsonwebtoken';
import { usersCollection } from "../database/db.js";
import bcrypt from "bcrypt";

const userSchema = joi.object({
  name: joi.string().required().min(4),
  email: joi.string().email().required().min(4),
  password: joi.string().required().min(4),
  repeat_passord: joi.ref("password"),
  type:joi.string().required().valid("adm", "user")
});

export async function singInValidation(req, res, next) {
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


export async function singUpValidation(req, res, next) {
const {name,email,password,passwordConfirm,type} = req.body;

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
res.locals.user = user;
next();
}
