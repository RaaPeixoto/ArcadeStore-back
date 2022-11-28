import { sessionsCollection, shopKartCollection} from "../database/db.js";

export async function postShopKart(req, res) {
  const productSelect = req.body;
  const { authorization } = req.headers;
  const userId = await sessionsCollection.findOne({authorization});
  try {
    await shopKartCollection.insertOne({ product: productSelect, userId });
    console.log({ product: productSelect, userId })
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
}

export async function deleteItemShopKart(req, res) {
  const { title, price, id } = req.body; 
  const { token } = req.headers;

  try {
    await shopKartCollection.deleteOne({ product: title, user: token });
    res.sendStatus(401);
  } catch (err) {
    console.log(err);
    res.sendStatus(501);
  }
}

export async function getShopKart(req,res){
    const token = req.headers
    try{
    const allShopKart = (await shopKartCollection.find({}).sort().toArray()).filter((userShopKart)=>{
      shopKartCollection({user:token})
    });    
    res.send({userShopKart})
}catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}