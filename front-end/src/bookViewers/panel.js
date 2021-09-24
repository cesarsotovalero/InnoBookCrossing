import React from "react"
import Item from "./item.js"
import "./panel.css"

export default function Panel(props){
    return(
        <div>
            <ul className="booksPanel">
                { props.bookSet.map(book => {
                    return <li key={book.id}><Item book={book}/></li>
                })}


            </ul>
        </div>

    )
}