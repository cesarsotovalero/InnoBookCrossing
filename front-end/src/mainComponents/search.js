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
    },
    found: {
        position:'absolute',
        zIndex:'90',
        width: '60%',
        marginLeft:'20%',
        marginRight:'20%',
        backgroundColor:'#fff',
        border: '2px solid #348f41',
        borderRadius: '15px',
        padding: '1%',
        textAlign: 'center',
        boxShadow: '0 2px 5px 0 #348f41',
        color: '#348f41',
    }

}


export default function Search(onChange){
    let err = null;
    let searchRef = null;
    let [find_set, setFind] = React.useState({})
    function onChange(book_name){
        if (book_name===""){
            err = null
            setFind(find_set={id:-1});
            return
        }else{
            setFind(find_set={id:0});
            fetch('http://localhost:8080/book/search?search='+ book_name)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setFind(find_set=data)
                })

        }

    }
    return(
        <div>
            <input type='text' placeholder={'Search...'} style={styles.input}
                   ref={ref => searchRef = ref}
                   onChange={() => onChange(searchRef.value)}/>
            { find_set.id > 0? (
                <div style={styles.found}>
                    <p>По вашему запросу найдена одна книга:</p>
                    <Item book={find_set}/></div>
            ):null}
            { find_set.id === 0 ?(
                <div style={styles.found}><p>По вашему запросу не найдено ни одной книги.
                    Пожалуйста вводите полное название книги.</p></div>
            ):null}

        </div>
    )
}