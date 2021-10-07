import './App.css';
import Header from './mainComponents/header'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Lib from "./Pages/Lib";
import Book from "./Pages/Book";
import React from "react";

function App() {

    return (
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/library" component={Lib} />
                    <Route path='/library/:book' component={Book}/>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
