import React from "react"
import Modal from "./modal";


const styles ={
    input: {
        marginBottom:'5px',
        width: '96%',
    },
    block:{
        textAlign: 'left',
        lineHeight: '0'
    },
    button:{
        width: '60%',
        height: '30px',
        marginLeft: '18%',
    }

}

export default function AddBook({active, setActive}){
    let title = null;
    let author = null;
    let description = null;
    let imgURL = null;
    let genre = null;
    const [message, setMessage] = React.useState('');

    function postBook(){
        let data = { title: title.value,
            author: author.value,
            description: description.value,
            image: imgURL.value,
            genre: genre.value};

        try {
            fetch('http://localhost:8080/book/2/add',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    alert("Book added successfully");
                    setActive()
                })
        } catch (error) {
            setMessage(error)
        }
    }
    return(
        <Modal active={active} setActive={setActive}>
            <div style={styles.block}>
                <p>Enter book title</p><input style={styles.input} ref={ref => title = ref}/>
                <p>Enter book author</p><input style={styles.input} ref={ref => author = ref}/>
                <p>Enter book genre</p><input style={styles.input} ref={ref => genre = ref}/>
                <p>Provide a link to book image</p><input style={styles.input} ref={ref => imgURL = ref}/>
                <p>Enter book description</p><textarea style={styles.input} rows={'4'} ref={ref => description = ref}/>
                {message ? <p>{message}</p> : null}
                <button style={styles.button} onClick={() => postBook()}>Submit book</button>
            </div>
        </Modal>
    )
}