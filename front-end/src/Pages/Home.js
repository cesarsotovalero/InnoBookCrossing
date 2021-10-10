import React, {Component} from 'react';
import Carousel from "../bookViewers/carousel";
import AddBook from "../forms/addBook";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
            modalActive: false,
            user_id:"",
        }
    }
    componentDidMount() {
        const user_id = localStorage.getItem('user_id')
        try{
            fetch('http://localhost:8080//user/' + user_id + '/books')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.setState({
                        bookList: data
                    });
                });
        } catch (error) {
        alert('Ошибка:' + error);
        }
    }

    openAddBook = () => this.setState({modalActive : !this.state.modalActive})
    render() {
        let styles ={
            button:{
                width: '30%',
                height: '40px',
                marginTop: '20px',
                marginBottom: '20px',
                marginLeft: '35%',
                textAlign: 'center'
            }
        }
        const bookList = this.state.bookList

        return (
            <div>
                <button type="submit" onClick={this.openAddBook} style={styles.button}>
                    { this.state.modalActive ? 'Cancel' : 'Add book' }
                </button>
                <AddBook active={this.state.modalActive} setActive={this.openAddBook}/>
                <Carousel bookSet={bookList} label={"My additions"}/>
            </div>
        );
    }
}

export default Home;