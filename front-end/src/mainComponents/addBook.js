import React from "react"
// import "./addBook.css"

const styles ={
    block: {
        position: 'absolute',
        zIndex: '100',
        width:'60%',
        height:'450px',
        backgroundColor:'#ccc',
        display: 'block',
        left: '50%',
        transform: 'translate(-50%, 0)',
        textAlign: 'center',
        border: '3px solid dimgray',
        borderRadius: '5px',

    },
    input: {
        width: '60%',
        backgroundColor:'#ddd',
        border: '1px solid dimgray',
        height: '20px',
        borderRadius: '5px'
    },
    button: {
        position: 'absolute',
        backgroundColor:'#88cb01',
        border: '1px solid dimgray',
        borderRadius: '5px',
        left: '10px',
        bottom: '20px'
    },

}

export default function AddBook(props){
    return(
        <div className="block" style={styles.block}>
            {props.style}
            <p>Enter book title</p><input style={styles.input}/>
            <p>Enter book author</p><input style={styles.input}/>
            <p>Provide a link to book image</p><input style={styles.input}/>
            <p>Enter book description</p><input style={styles.input}/>
            <p>Who are you?Tg alias</p><input style={styles.input}/>
            <button style={styles.button}><p>Submit book</p></button>
        </div>
    )
}