import React, {Component} from 'react';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {}
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/book/get/' + this.props.match.params.book)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    book: data
                });
            });
    }

    render() {
        const book = this.state.book
        return (
            <div>
                {book.image ? (
                    <img className="bookImg" src={book.image}/>
                ) : (
                    <img className="bookImg" src="no_image.png"/>
                )}
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>

            </div>
        );
    }
}

export default Book;