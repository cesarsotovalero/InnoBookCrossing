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
    },
    button: {
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
            <button style={styles.button} className={'inactive_button'}>Submit book</button>
        </div>
    )
}