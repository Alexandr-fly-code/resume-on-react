import React from 'react';

import { NavLink } from 'react-router-dom';

import '../../styles/navigation.css';


const Navigation = () => {
    return (
        // <div>
        <>
            <ul className="nav">
                <li className="nav_item"><NavLink  exact to="/" activeClassName="nav_link" >about me</NavLink></li>
                <li className="nav_item"><NavLink  to="/expskills" activeClassName="nav_link">Experience & skills</NavLink></li>
                {/* <li className="nav_item"><NavLink  to="/education" activeClassName="nav_link">education</NavLink></li> */}
                <li className="nav_item"><NavLink  to="/projects" activeClassName="nav_link">projects</NavLink></li>
                <li className="nav_item"><NavLink  to="/hobbies" activeClassName="nav_link">hobbies</NavLink></li>
                
            </ul>
        {/* </div> */}
        </>
    );
};

export default Navigation;