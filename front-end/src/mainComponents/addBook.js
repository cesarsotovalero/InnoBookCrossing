import React from "react"
// import "./addBook.css"

const styles ={
    block: {
        position: 'absolute',
        zIndex: '100',
        width:'30%',
        height:'450px',
        backgroundColor:'#fff',
        display: 'block',
        left: '50%',
        transform: 'translate(-50%, 0)',
        textAlign: 'left',
        borderRadius: '25px',
        boxShadow: '0 0 200px 100px #b0b3b2',
        padding: '2%',
        lineHeight: '0'

    },
    input: {
        marginBottom:'5px',
        width: '96%',
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

            <p>Provide a link to book image</p><input style={styles.input} type={'url'}/>
            <p>Enter book description</p><textarea style={styles.input} rows={'4'}/>
            <p>Who are you?Tg alias</p><input style={styles.input}/>
            <button style={styles.button} className={'inactive_button'}>Submit book</button>
        </div>
    )
}