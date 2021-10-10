import React, {Component} from 'react';
import BookInfo from "../bookViewers/book_info";

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
                <BookInfo book={book} book_id={this.props.match.params.book}/>
            </div>
        );
    }
}

export default Book;