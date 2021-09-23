import React from "react"
import "./item.css"
import {Link} from "react-router-dom";

const styles ={

}

export default function Item({book}){
    return(
        <div className="bookCell">
            <Link to={`/library/${book.id}`}>
                {book.image ? (
                    <img className="bookImg" src={book.image}/>
                ) : (
                    <img className="bookImg" src="no_image.png"/>
                )}
                <div className="bookInfo">
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                </div>
            </Link>
        </div>
    )
}