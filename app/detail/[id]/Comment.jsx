'use client'
import { useState } from "react";
export default function Comment() {
    let [commnet, setComment] = useState('')
    return(
        <div>
            <div>comment</div>
            <input onChange={(e)=>{setComment(e.target.value)}}/>
            <button onClick={()=>{
                console.log(commnet)
                // fetch('')
            }}>Submit</button>

        </div>
    )
}