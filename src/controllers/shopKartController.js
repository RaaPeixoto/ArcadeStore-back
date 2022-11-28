import { shopKartCollection} from "../database/db";

export async function postShopKart(req, res) {
  const productSelect = req.body;
  const { id } = req.headers;
  try {
    await shopKartCollection.insertOne({ product: productSelect, user: id });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
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
    const allShopKart = (await shopKartCollection.find().sort().toArray()).filter((userShopKart)=>{
      shopKartCollection({user:token})
    });    
    res.send({userShopKart})
}catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}