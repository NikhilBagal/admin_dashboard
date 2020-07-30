import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
    return ( 
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
     );
}
 
export default NavBar;