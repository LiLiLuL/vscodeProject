import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css'
const NavBar=()=>(
    <div>
        <div>
            <NavLink exact   className="blue" to="/" activeClassName="bbb">xq</NavLink>|&nbsp;&nbsp;
            <NavLink  to="/Test" activeClassName="bbb">test</NavLink>|&nbsp;&nbsp;
            <NavLink  to="/TestB/Loveandlove/HELLOyo" activeClassName="bbb">test1</NavLink>|&nbsp;&nbsp;
            <NavLink  to="/Test6" activeClassName="bbb">test2</NavLink>|&nbsp;&nbsp;
            <NavLink  to="/redireact" activeClassName="active">Redireact</NavLink>

        </div>
    </div>

)
export default NavBar;