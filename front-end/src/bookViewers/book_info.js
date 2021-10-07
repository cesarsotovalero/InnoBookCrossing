import React from "react"
import "./book_info.css"

const styles ={

}

export default function BookInfo({book}){
    return(
        <div className="info">
            <div className="imgCover">
                {book.image ? (
                    <img className="bookImg" src={book.image}/>
                ) : (
                    <img className="bookImg" src="../no_image.png"/>
                )}
            </div>
            <div className="bookInfo">
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <h3>Genre: {book.genre}</h3>
                <br/>
                <p>Book owner: {book.owner}</p>
                <p>Description: {book.description}</p>
            </div>


        </div>
    )
}