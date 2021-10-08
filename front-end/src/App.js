import './App.css';
import Header from './mainComponents/header'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Lib from "./Pages/Lib";
import Book from "./Pages/Book";
import React from "react";

function App() {
    const user_id = localStorage.getItem('user_id')
    return (
        <div>
            <Header/>
            <Router>
                <Switch>
                    {user_id ? <Route exact path="/home" component={Home} /> : null}
                    <Route exact path="/" component={Lib} />
                    <Route path='/library/:book' component={Book}/>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
