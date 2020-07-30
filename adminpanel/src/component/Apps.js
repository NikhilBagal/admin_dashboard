import React from 'react';
import "./Apps.css";
import {Link} from 'react-router-dom';

const Apps = () => {
    return ( 
        <div className="apps">
            <button id="toggle" onClick={toggleClick}><i className="fa fa-bars" aria-hidden="true"></i></button>
            <nav className="navigationBar">
                <ul>
                    <li className="parentList">
                    <Link to="/"><p>Dashboard</p></Link> 
                    </li>
                    <li className="parentList">
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <Link to="/"><p>Home</p></Link>
                    </li>
                    <li className="parentList">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <Link to="/users"><p>Users</p></Link>
                    </li>
                    <li className="parentList">
                        <i className="fa fa-file" aria-hidden="true"></i>
                        <Link to="/pages"><p>Pages</p></Link>
                    </li>
                    <li className="parentList">
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        <Link to="/apps"><p>Apps</p></Link>
                    </li>
                </ul>
            </nav>
            <div className="apps-div">
                <h1>Coming Soon...</h1>
            </div>
        </div>
     );
}

function toggleClick(e){
    var navSelector = document.querySelector("nav")
    if(navSelector.classList.contains("active")){
        navSelector.classList.remove("active")
    }else {
        navSelector.classList.add("active")
    }
    var bodySelector = document.querySelector("body")
    bodySelector.addEventListener("click", (e)=>{
        if(e.clientX > navSelector.offsetWidth){
            navSelector.classList.remove("active")
        }
    })
}
 
 
export default Apps;