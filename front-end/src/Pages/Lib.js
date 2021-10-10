import React, {Component} from 'react';
import Panel from "../bookViewers/panel";
import InfoBlock from "../mainComponents/info_block";
import Search from "../mainComponents/search";

class Lib extends Component {
    constructor(props) {
        super(props);
        this.state = {
            library: [],
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
        const library = this.state.library
        return (
            <div>
                <InfoBlock/>
                <Search/>
                <Panel bookSet={library}/>
            </div>
        );
    }
}

export default Lib;