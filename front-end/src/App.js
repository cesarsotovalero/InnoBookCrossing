import './App.css';
import Header from './mainComponents/header'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Lib from "./Pages/Lib";

function App() {

    return (
        <body>
        <Header/>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/library" component={Lib} />
            </Switch>
        </Router>
        </body>
    );
}

export default App;
