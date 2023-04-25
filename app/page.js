import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"


export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray() // load all posts and return as array
  console.log(result)

  // await fetch('/URL', {cache : 'force-cache'})
  // other way : //{cache : 'no-store'}, {newt : {revalidate: 60}}
  return (
   <div>hello</div>
  )
}
