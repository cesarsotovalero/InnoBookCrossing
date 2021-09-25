import React from "react"


const styles ={
    info_block:{
        width: '94%',
        backgroundColor: '#ccc',
        backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3), rgba(0,0,0,0.7)),' +
            ' url(book_stack.jpg)',

        border: '1px solid #97caeb',
        borderRadius: '15px',
        margin: '2%',
        padding: '1%',
        color: '#fff',
        textAlign: 'center',
    },
    text:{
        color: '#fff',
    }
}

export default function InfoBlock(){
    return(
        <div style={styles.info_block} className={"projectInfo"}>
            <h1 style={styles.text}>InnoBookCrossing - a web service, which makes the process of exchanging books simple.</h1>
            <p style={styles.text}><i>“A book is a dream that you hold in your hands."
                ― Neil Gaiman</i></p>
        </div>
    )
}