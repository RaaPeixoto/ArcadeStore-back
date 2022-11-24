import { usersCollection } from "../database/db";

export async function signIn(req, res) {
  const user = res.locals.user;
  const token = uuidV4;
  try {
    res.sendStatus(201) 
  } catch (err) {
    console.log(err);
  }
}

export async function signUp(req,res){



}