import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){

    console.log(req.body)
    if(req.method == "POST"){

        let editElement = {
            title : req.body.title,
            content : req.body.content
        }

        const client = await connectDB;
        const db = client.db("forum")
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(req.body._id)}, 
            { $set : editElement} 
          );
        res.redirect(302, '/list')
    }
    

}