import { connectDB } from "@/util/database";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { ObjectId } from "mongodb";
export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions)
    if(req.method == 'POST'){
        

        console.log(req.body)
        req.body = JSON.parse(req.body)

        let commentObj = {
            content : req.body.comment,
            parent : new ObjectId(req.body._id),
            author : session.user.email
        }



        const db = (await connectDB).db('forum')
        let result = await db.collection('comment').insertOne(commentObj)
        res.status(200).json('saved')
    }

}