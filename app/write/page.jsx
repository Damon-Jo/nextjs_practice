export default function Write(){

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