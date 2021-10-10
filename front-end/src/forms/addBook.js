import React from "react"
import Modal from "./modal";
import "./book_adding.css"


const styles ={

}

export default function AddBook({active, setActive}){
    const user_id = localStorage.getItem('user_id')
    let title = null;
    let author = null;
    let description = null;
    let imgURL = null;
    let genre = null;
    const [error_message, setError_message] = React.useState("");

    function postBook(){
        if (title.value.length < 2 ) {
            setError_message('Title field is not valid!');
            return false;
        }
        if (author.value.length < 4 ) {
            setError_message('Author field is not valid!');
            return false;
        }
        if (genre.value.length < 2 ) {
            setError_message('Genre field is not valid!');
            return false;
        }
        let data = { title: title.value,
            author: author.value,
            description: description.value,
            image: imgURL.value,
            genre: genre.value,
            available: "true"};

        try {

            fetch('http://localhost:8080/book/' + user_id + '/add',{
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
            alert(error)
        }
    }
    return(
        <Modal active={active} setActive={setActive}>
            <div className="adding_window">

                <div className="adding_title ">
            <span>
                Adding a book
            </span>
                </div>

                <div className="book_title_box adding_box">
                    <div className="floating_title">
                        Book's Title
                    </div>

                    <input id="book_title" type="text" ref={ref => title = ref}/>
                </div>

                <div className="book_author_box adding_box">
                    <div className="floating_title">
                        Book's Author
                    </div>

                    <input id="book_author" type="text" ref={ref => author = ref}/>
                </div>

                <div className="book_genre_box adding_box">
                    <div className="floating_title">
                        Book's Genre
                    </div>
                    <input id="book_genre" type="text" ref={ref => genre = ref}/>
                </div>

                <div className="photo_link_box adding_box">
                    <div className="floating_title">
                        Link to the photo
                    </div>
                    <input id="photo_link" type="text" ref={ref => imgURL = ref}/>
                </div>

                <div className="book_descr_box adding_box">
                    <div className="floating_title">
                        Description
                    </div>
                    <textarea name="" id="" cols="68" rows="6" ref={ref => description = ref}/>
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

                <div className="submit_btn">
                    <button onClick={() => postBook()}>Save book</button>
                </div>

            </div>
        </Modal>
    )
}