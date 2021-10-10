import React from "react"
import Item from "../bookViewers/item";

const styles ={
    input: {
        width: '60%',
        marginLeft:'20%',
        marginRight:'20%',
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


export default function Search(){
    let searchRef = null;
    let [find_set, setFind] = React.useState({})
    function onChange(book_name){
        if (book_name===""){
            setFind({id:-1});
            return true
        }else{
            setFind({id:0});
            try{
                fetch('http://localhost:8080/book/search?search='+ book_name)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        setFind(data)
                        return true
                    })

            } catch (error) {
                console.error('Ошибка:', error);
                return false
            }
        }
    }
    return(
        <div>
            <input type='text' placeholder={'Search...'} style={styles.input}
                   ref={ref => searchRef = ref}
                   onChange={() => onChange(searchRef.value)}/>
            { find_set.id > 0? (
                <div style={styles.found}>
                    <p>One book was found for your request:</p>
                    <Item book={find_set}/></div>
            ):null}
            { find_set.id === 0 ?(
                <div style={styles.found}><p>No books were found for your search.
                    Please enter the full title of the book.</p></div>
            ):null}

        </div>
    )
}