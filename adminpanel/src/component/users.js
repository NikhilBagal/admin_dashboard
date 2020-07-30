import React from 'react';
import {Link} from 'react-router-dom';
import "./users.css"

const Users = () => {
    return ( 
        <div className="users">
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
            <div className="users-div">
                <table>
                    <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                    </tbody>
                </table>
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
 

export default Users;