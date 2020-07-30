import React from 'react';
import "./DashBoard.css"
import Chart from "./chart"

const DashBoard = () => {
    return ( 
        <div className="dashboard">
            <button id="toggle" onClick={toggleClick}><i className="fa fa-bars" aria-hidden="true"></i></button>
            <button id="logOut">Log Out</button>
            <h1>Welcome to DashBoard.</h1>
            <p>Discover this dashboard to get insights on your project.</p>
            <div id="chart">
                <Chart/>
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
 
export default DashBoard;