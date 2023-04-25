import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res){

    



    // const { _id } = req.body;
    if(req.method == "POST"){
        let session = await getServerSession(req, res, authOptions)
        const client = await connectDB;
        const db = client.db("forum")

        let searchedData = await db.collection('post').findOne({_id : new ObjectId(req.body)})

        if (searchedData.author == session.user.email){
            let result = await db.collection('post').deleteOne({_id : new ObjectId(req.body)})
            res.status(200).json({message : "success delete"})
        } else {
            return res.status(500).json({message : "you are not the author"})
        }

        
    }
}