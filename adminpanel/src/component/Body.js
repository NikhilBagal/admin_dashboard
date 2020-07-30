import React from 'react';
import Main from './Main';
import Users from './users';
import Pages from './Pages';
import Apps from './Apps'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import "./Body.css"

const Body = () => {
    return (
        <Router basename="/home">
            <div className="body">
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/users" exact component={Users}/>
                    <Route path="/pages" exact component={Pages}/>
                    <Route path="/apps" exact component={Apps}/>
                </Switch>
            </div> 
        </Router>
        
     );
}
 
export default Body;