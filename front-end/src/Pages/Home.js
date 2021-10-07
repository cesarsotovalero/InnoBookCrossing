import React, {Component} from 'react';
import Carousel from "../bookViewers/carousel";
import AddBook from "../forms/addBook";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
            modalActive: false,
        }
    }
    componentDidMount() {
        try{
            fetch('http://localhost:8080/book/get/all')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.setState({
                        bookList: data
                    });
                });
        } catch (error) {
        console.error('Ошибка:', error);
        }
    }

    handleClick = () => this.setState({modalActive : !this.state.modalActive})
    render() {
        let styles ={
            button:{
                width: '30%',
                height: '30px',
                marginTop: '20px',
                marginLeft: '35%'
            }
        }
        const bookList = this.state.bookList

        return (
            <div>
                <button onClick={this.handleClick} style={styles.button}>
                    { this.state.modalActive ? 'Cancel' : 'Add book' }
                </button>
                <AddBook active={this.state.modalActive} setActive={this.handleClick}/>
                <Carousel bookSet={bookList} label={"My additions"}/>
            </div>
        );
    }
}

export default Home;