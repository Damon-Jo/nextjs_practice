import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res){
    let session = await getServerSession(req, res, authOptions)
    console.log(session)
    if(req.method === 'POST'){
        let data = req.body

        if(session){
            data.author = session.user.email
        }

        if(data.title === '' || data.content === ''){
            return res.status(400).json('Please fill all the fields')
        }

        try {
            const client = await connectDB;
            const db = client.db("forum")
            let result = await db.collection('post').insertOne(data)
        
        // return res.status(200).json('saved data')
        return res.redirect(302, '/list')
        } catch(err){
            return res.status(500).json('Server Error')
        }
    }
}