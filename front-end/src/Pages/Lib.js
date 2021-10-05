import React, {Component} from 'react';
import Panel from "../bookViewers/panel";
import InfoBlock from "../mainComponents/info_block";
import Search from "../mainComponents/search";
import AddBook from "../mainComponents/addBook";
import Authorization from "../mainComponents/authorization";
import Registration from "../mainComponents/registration";

class Lib extends Component {
    constructor(props) {
        super(props);
        this.state = {
            library: [],
            showReg: false,
            showAuth: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/book/get/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    library: data
                });
            });
    }


    render() {
        const styles ={

        }

        // const latestBooks = [
        //     {id:1, title:"Пиковая дама", author:"Пушкин", image:"https://api.v2.gersun.the-o.co/media/3_%D0%A8%D0%B5%D1%81%D1%82%D0%B8%D0%B3%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BA%D0%B0_8lt1m4x.jpeg"},
        //     {id:2, title:"Преступление и наказание", author:"Достоевский", image:"https://api.v2.gersun.the-o.co/media/SL_133_DWO_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
        //     {id:3, title:"Вино из одуванчиков", author:"Бредбери", image:"https://api.v2.gersun.the-o.co/media/3xSL167_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
        //     {id:4, title:"Цифровая крепость", author:"Браун", image:"https://cdn1.ozone.ru/multimedia/wc1200/1011429201.jpg"},
        //     {id:5, title:"Пиковая дама", author:"Пушкин", image:""},
        //     {id:6, title:"Преступление и наказание", author:"", image:"https://api.v2.gersun.the-o.co/media/SL_133_DWO_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
        //     {id:7, title:"Вино из одуванчиков", author:"Бредбери", image:"https://api.v2.gersun.the-o.co/media/3xSL167_%D1%81_%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0%D0%BC%D0%B8.jpeg"},
        //     {id:8, title:"", author:"Браун", image:"https://cdn1.ozone.ru/multimedia/wc1200/1011429201.jpg"}
        // ]
        const library = this.state.library
        return (
            <div>
                <button onClick={() => this.setState({showAuth : !this.state.showAuth})}>
                    { this.state.showAuth ? 'Cancel' : 'showAuth' }
                </button>
                { this.state.showAuth ? <Authorization/> : null }
                <button onClick={() => this.setState({showReg : !this.state.showReg})}>
                    { this.state.showReg ? 'Cancel' : 'showReg' }
                </button>
                { this.state.showReg ? <Registration/> : null }
                <InfoBlock/>
                <Search/>
                <Panel bookSet={library}/>
            </div>
        );
    }
}

export default Lib;