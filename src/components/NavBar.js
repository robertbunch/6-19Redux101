import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">Entire Store</Link></li>
                    <li><Link to="/meat-dept">Meat Store</Link></li>
                    <li><Link to="/frozen-dept">Frozen Department</Link></li>
                    <li><Link to="/dairy-dept">Dairy Department</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;