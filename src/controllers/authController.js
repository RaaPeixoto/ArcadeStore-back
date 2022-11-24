import { ObjectId } from "mongodb";
import { usersCollection } from "../database/db";

export async function signIn(req, res) {
  const user = res.locals.user;
  
  try {
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
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
  const { id } = req.params;

  try {
    await usersCollection.updateOne({ _id: ObjectId(id) }, { $set: newUser });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}