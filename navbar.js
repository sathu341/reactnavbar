import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import{Mitem} from "./Menuitem"
import './navbar.css'
class Navbar extends Component {
    state = { 
        
     } 
    render() { 
        return (
            <>
         
             <nav className='Navitems'>
                 <div className="nav-logo">Meida</div>
                 <div className="menu-icon">
                 <i class="fa fa-car"></i>
                 </div>
                 <ul className="navul">
                   <li className="navlist">
                       <a className="navlink" href="">Home</a>
                   </li>
                   <li className="navlist">
                       <a className="navlink" href="">Contact Us</a>
                   </li>
                   <li className="navlist">
                       <a className="navlink" href="">About us</a>
                   </li>
                 </ul>
             </nav>
            </>
        );
    }
}
 
export default Navbar;