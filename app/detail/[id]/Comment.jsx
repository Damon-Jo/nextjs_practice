'use client'
import { useState, useEffect } from "react";

export default function Comment(props) {
    const [domLoaded, setDomLoaded] = useState(false);
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])

    useEffect(() => {
        setDomLoaded(true);

        fetch('/api/comment/list?id='+ props._id).then(r=>r.json())
        .then((result)=>{
            console.log(result)
            setData(result)
        })
      }, []);

    return(
        <>
            {domLoaded && (
                <div>
                    <hr></hr>
                    <div>comment</div>
                    {
                        data.length > 0 ?
                        data.map((com,index)=>{
                            return(
                                <p key={index}>{com.content}</p>
                            )
                        })
                        : 'no commnet'
                    }

                    <input onChange={(e)=>{setComment(e.target.value)}}/>
                    <button onClick={()=>{
                        console.log(comment)
                        fetch('/api/comment/new', {
                            method : 'POST', 
                            body : JSON.stringify({comment : comment, _id : props._id}),
                            })
                    }}>Submit</button>
                </div>
            )}
            


        </>
    )
}