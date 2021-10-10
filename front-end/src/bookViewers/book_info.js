import React from "react"
import "./book_info.css"
import EditBook from "../forms/editBook";

const styles ={
    red:{
        color: 'red',
    }
}

export default function BookInfo({book, book_id}){
    const username = localStorage.getItem('username')
    const [showEdit, setShowEdit] = React.useState(false)

    function showEditBook(){
        setShowEdit(!showEdit)
    }
    console.log(book)
    return(
        <div className="info">
            <EditBook active={showEdit} setActive={showEditBook} book={book} book_id={book_id}/>
            <div className="imgCover">
                {book.image ? (
                    <img className="bookImg" src={book.image}/>
                ) : (
                    <img className="bookImg" src="../no_image.png"/>
                )}
                {book.alias === username ? <button type="submit" className={"btn_edit"} onClick={showEditBook}>Edit</button> : null}

            </div>
            <div className="bookInfo">
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <br/>
                <hr className={"selector"}/>
                <br/>
                <h3>Genre: {book.genre}</h3>
                <br/>
                <p>Book owner: {book.alias}</p>
                {book.available === 'true' ? <p>Available now</p> : <p style={styles.red}>Not available now</p>}
                <br/>
                <hr className={"selector"}/>
                <br/>
                <p>Description: {book.description}</p>
            </div>


        </div>
    )
}