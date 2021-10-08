import React from "react"
import Modal from "./modal";


const styles ={
    input: {
        marginBottom:'5px',
        width: '96%',
    },
    block:{
        textAlign: 'left',
    },
    button:{
        width: '60%',
        height: '30px',
        marginLeft: '18%',
    }

}

export default function EditBook({active, setActive, book, book_id}){
    const [error_message, setError_message] = React.useState("");
    const user_id = localStorage.getItem('user_id')
    let [title, setTitle] = React.useState("");
    let [author, setAuthor] = React.useState("");
    let [description, setDescription] = React.useState("");
    let [imgURL, setImgURL] = React.useState("");
    let [genre, setGenre] = React.useState("");

    if(!title){
        title = book.title
    }
    if(!description){
        description = book.description;
    }
    if(!imgURL){
        imgURL = book.image;
    }
    if(!genre){
        genre = book.genre;
    }
    if(!author){
        author = book.author;
    }
    console.log(book)

    const [message, setMessage] = React.useState('');

    function editBook(){
        try {
            let data = { title: title,
                author: author,
                description: description,
                image: imgURL,
                genre: genre};
            console.log(data)
            if (title.length < 2 ) {
                setError_message('Title field is not valid!');
                return false;
            }
            if (author.length < 4 ) {
                setError_message('Author field is not valid!');
                return false;
            }
            if (genre.length < 2 ) {
                setError_message('Genre field is not valid!');
                return false;
            }



            fetch('http://localhost:8080/user/' + user_id + '/book/' + book_id,{
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
        return false;
    }
    return(
        <Modal active={active} setActive={setActive}>
            <div style={styles.block}>
                <p>{title}</p>
                <p>Enter book title</p><input type="text" style={styles.input} value={title}
                                              onChange={event => setTitle(event.target.value)}/>

                <p>Enter book author</p><input style={styles.input} value={author}
                                               onChange={event => setAuthor(event.target.value)}/>
                <p>Enter book genre</p><input style={styles.input} value={genre}
                                              onChange={event => setGenre(event.target.value)}/>
                <p>Provide a link to book image</p><input style={styles.input} value={imgURL}
                                                          onChange={event => setImgURL(event.target.value)}/>
                <p>Enter book description</p><textarea style={styles.input} rows={'4'} value={description}
                                                       onChange={event => setDescription(event.target.value)}/>
                {message ? <p>{message}</p> : null}
                <button style={styles.button} onClick={() => editBook()}>Submit book</button>
            </div>
        </Modal>
    )
}