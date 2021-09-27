import React from "react"
import Item from "./item.js"
import "./carousel.css"

export default function Carousel(props){
    const styles ={
        label:{
            textAlign: 'center',
        }
    }
    return(
        <div>
            <h1 style={styles.label}>{props.label}</h1>
            <ul className="carouselList">
                { props.bookSet.map(book => {
                    return <li key={book.id}><Item book={book}/></li>
                })}


            </ul>
        </div>

    )
}