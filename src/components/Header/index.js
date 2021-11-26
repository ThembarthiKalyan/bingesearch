import React from "react";
import './index.css';
import {Link} from "react-router-dom";

function Header(props){

    return(
        <div className='row'>
            <nav className="navbar my navbar-light justify-content-between">
                <div className="navbar-brand" Style={"margin-left:20px;"}>BingeSearch</div>
                <input className="form-control mr-sm-2 bn" type="search" placeholder="Search movies/series" aria-label="Search" Style={"width:50%;"} value={props.value}
                onChange={(e)=>props.setSearchValue(e.target.value)}/>
            </nav>
        </div>
    )
}

export default Header;