import { connectDB } from "@/util/database";

export default async function handler(req, res){
    if(req.method === 'POST'){
        let data = req.body

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