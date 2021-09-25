import React from "react"
import AddBook from "./addBook";
import Carousel from "../bookViewers/carousel";
import Item from "../bookViewers/item";
// import "./addBook.css"

const styles ={
    input: {
        width: '60%',
        marginLeft:'20%',
        marginRight:'20%',
        backgroundColor:'#fff',
        border: '2px solid #348f41',
        borderRadius: '15px',
        padding: '1%',
        color: '#348f41',

    }

}


export default function Search(){
    let searchRef = null;
    return(
        <div>
            <input type='text' placeholder={'Search...'} style={styles.input}
                   ref={ref => searchRef = ref}
                   onChange={() => fetch('http://localhost:8080/book/search?search='+searchRef.value)
                       .then((response) => {
                           return response.json();
                       })
                       .then((data) => {

                           console.log(data);
                       })}/>
        </div>
    )
}