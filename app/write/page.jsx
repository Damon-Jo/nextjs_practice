export default function Write(){

    // let submition = async (e) => {
    //     e.preventDefault()
    //     let title = e.target.title.value
    //     let content = e.target.content.value
    //     let data = {
    //         title : title,
    //         content : content
    //     }
    //     let result = await fetch('/api/test', {
    //         method : 'POST',
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         },
    //         body : JSON.stringify(data)
    //     })
    //     console.log(result)
    // }


    return(
        <div className="p-20">
            <h4>Write page</h4>
            <form action='/api/post/new' method="POST">
                <label>title</label>
                <input type="text" name="title" placeholder="title"/>
                <label>content</label>
                <input type="text" name="content" placeholder="content"/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}