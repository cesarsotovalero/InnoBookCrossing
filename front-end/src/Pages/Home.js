import React, {Component} from 'react';
import Carousel from "../bookViewers/carousel";
import AddBook from "../forms/addBook";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latestBooks: [],
            showAdd: false,
            active: true,
            modalActive: true,
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
                        latestBooks: data
                    });
                });
        } catch (error) {
        console.error('Ошибка:', error);
        }
    }

    handleClick = () => this.setState({showAdd : !this.state.showAdd})
    render() {
        let styles ={
            hidden:{
                visibility: 'hidden',
            }
        }
        const latestWishes = this.state.latestBooks

        return (
            <div>
                <button onClick={this.handleClick}>
                    { this.state.showAdd ? 'Cancel' : 'Add book' }
                </button>
                <AddBook active={this.state.showAdd} setActive={this.handleClick}/>

                {/*<Carousel bookSet={this.latestBooks} label={"Latest updates"}/>*/}
                <Carousel bookSet={latestWishes} label={"Latest wishes"}/>
            </div>
        );
    }
}

export default Home;