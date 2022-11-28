import { shopKartSchema } from "../models/shopKartSchema.js";
import { sessionsCollection, shopKartCollection } from "../database/db.js";
import { ObjectId } from "mongodb";
export async function validateShopKartSchema(req, res, next) {
  const { error } = shopKartSchema.validate(req.body, { abortEarly: false });
  const { authorization } = req.headers;
  if (!authorization) {
    return res.sendStatus(401)
  }
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  next();
}

export async function validateDeleteItem(req, res, next) {
  const { id } = req.params;
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const user = await sessionsCollection.findOne({ token });
  if (!token) {
    return res.sendStatus(401);
  }
  const kartItem = await shopKartCollection.findOne({ _id: new ObjectId(id) });
  if (!kartItem) {
    return res.sendStatus(404);
  }
  
  if (kartItem.userId.toString() !== user.userId.toString()) {
    
    return res.sendStatus(401);
  }
  next();
}

export async function validateGetItem(req,res,next){
 
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(401);
  }
  const user = await sessionsCollection.findOne({ token });
  if (!user) {
    return res.sendStatus(401);
  }
 res.locals.user=user;
  next();
}