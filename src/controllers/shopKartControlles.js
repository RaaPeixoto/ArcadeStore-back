import { shopKartCollection} from "../database/db";

export async function postShopKart(req, res) {
  const newBuy = req.body;
  const { id } = res.headers;
  try {
    await shopKartCollection.insertOne({ product: newBuy, user: id });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
}

export async function deleteItemShopKart(req, res) {
  const { title } = req.body;
  const { id } = req.headers;

  try {
    await shopKartCollection.deleteOne({ product: title, user: id });
    res.sendStatus(401);
  } catch (err) {
    console.log(err);
    res.sendStatus(501);
  }
}

export async function getShopKart(req,res){
    const token = req.headers
    try{
    const allShopKart = (await shopKartCollection.find().sort().toArray()).filter((userShopKart)=>{
      shopKartCollection({user:token})
    });    
    res.send({userShopKart})
}catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}