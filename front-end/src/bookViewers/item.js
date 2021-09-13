import React from "react"
import "./item.css"

const styles ={

}

export default function Item({book}){
    return(
        <div className="bookCell">
            {book.img ? (
                <img className="bookImg" src={book.img}/>
            ) : (
                <img className="bookImg" src="no_image.png"/>
            )}
            <div className="bookInfo">
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
            </div>
        </div>
    )
}