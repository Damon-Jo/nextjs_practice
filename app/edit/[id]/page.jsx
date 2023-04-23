import {connectDB} from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props){
    const client = await connectDB;
    const db = client.db("forum")

    // console.log(props)
    // let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});
    // console.log(result)
    return(
        <div className="p-20">
            <h4>Edit page</h4>
            <form action='/api/post/edit' method="POST">
                <input type="text" name="title" defaultValue={result.title}/>
                <input type="text" name="content" defaultValue={result.content}/>
                <input style={{display : 'none'}} name="_id" defaultValue={result._id.toString()}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}