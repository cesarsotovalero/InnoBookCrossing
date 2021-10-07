import React, {Component} from 'react';
import Panel from "../bookViewers/panel";
import InfoBlock from "../mainComponents/info_block";
import Search from "../mainComponents/search";

import Authorization from "../forms/authorization";
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