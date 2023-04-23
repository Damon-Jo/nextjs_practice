'use client'
import Link from 'next/link'

function ListItem(props){
    return (
        <div>
            {
                props.result.map((data, index)=>               
                  <div className="list-item" key={index}>
                    
                    <Link href={'/detail/' + data._id}>
                      <h4>{data.title}</h4>
                    </Link>
                    <Link href={'/edit/' + data._id} className="list-btn">✏️</Link>
                    <span onClick={()=>{
                      fetch('/api/post/delete', {
                        method : 'POST', body : data._id
                      })
                      .then((r)=>{return r.json()})
                      .then(()=>{ 
                      })
                    }}>🗑️</span>
                    <p>1월 1일</p>
                  </div>
            )
          }
        </div>
    )
}

export default ListItem