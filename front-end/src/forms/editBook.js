import React from "react"
import Modal from "./modal";
import "./book_adding.css"


const styles ={
}

export default function EditBook({active, setActive, book, book_id}){
    const [error_message, setError_message] = React.useState("");
    const user_id = localStorage.getItem('user_id')
    let [title, setTitle] = React.useState("");
    let [author, setAuthor] = React.useState("");
    let [description, setDescription] = React.useState("");
    let [imgURL, setImgURL] = React.useState("");
    let [genre, setGenre] = React.useState("");
    let [available, setAvailable] = React.useState("");

    if(!title){
        title = book.title;
    }
    if(!description){
        description = book.description;
    }
    if(!available){
        available = book.available;
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


    function editBook(){
        try {
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
            let data = { title: title,
                author: author,
                description: description,
                image: imgURL,
                genre: genre,
                available: available};
            console.log(data)



            fetch('http://localhost:8080/user/' + user_id + '/book/' + book_id,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    alert("Book updated successfully");
                    setActive()
                })
        } catch (error) {
            alert(error)
        }
        return false;
    }
    return(
        <Modal active={active} setActive={setActive}>
        <div className="adding_window">

            <div className="adding_title ">
            <span>
                Editing the book
            </span>
            </div>

            <div className="book_title_box adding_box">
                <div className="floating_title">
                    Book's Title
                </div>

                <input id="book_title" type="text" value={title}
                       onChange={event => setTitle(event.target.value)}/>
            </div>

            <div className="book_author_box adding_box">
                <div className="floating_title">
                    Book's Author
                </div>

                <input id="book_author" type="text" value={author}
                       onChange={event => setAuthor(event.target.value)}/>
            </div>

            <div className="book_genre_box adding_box">
                <div className="floating_title">
                    Book's Genre
                </div>
                <input id="book_genre" type="text" style={styles.input} value={genre}
                       onChange={event => setGenre(event.target.value)}/>
            </div>

            <div className="photo_link_box adding_box">
                <div className="floating_title">
                    Link to the photo
                </div>
                <input id="photo_link" type="text" value={imgURL} title={"Link on image"}
                       onChange={event => setImgURL(event.target.value)}/>
            </div>

            <div className="book_descr_box adding_box">
                <div className="floating_title">
                    Description
                </div>
                <textarea name="" id="" cols="68" rows="5" value={description}
                          onChange={event => setDescription(event.target.value)}/>
            </div>
            {error_message ?(
                <div className="error">
                    <div className="error_icon">
                        <img src="../error_icon.png" alt=""/>
                    </div>

                    <div className="error_msg">

                        <span>{error_message}</span>

                    </div>

                    <button className="err_close_btn" onClick={()=>{setError_message("")}}>
                        <span>&times;</span>
                    </button>


                </div>
            ):(<br/>)}

            <button className="close_btn" onClick={setActive}>
                <span>&times;</span>
            </button>
            <div className="available_box adding_box">
                <span>  Availability: </span>
                <label className="switch">
                    <input type="checkbox" checked={available === "true"}
                           onClick={event => setAvailable(event.target.checked.toString())}
                           />

                    <span className="slider round"/>
                </label>
            </div>

            <div className="submit_btn">
                <button onClick={() => editBook()}>Save book</button>
            </div>

        </div>
    </Modal>)

}