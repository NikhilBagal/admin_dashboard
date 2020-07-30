import React from 'react';
import NavBar from './NavBar'
import DashBoard from './DashBoard'
import "./Main.css"

const Main = () => {
    return ( 
        <div className="main">
            <NavBar/>
            <DashBoard />
        </div>
     );
}
 
export default Main;