import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import{Mitem} from "./Menuitem"
import './navbar.css'
const  logo=new URL("./images_dir/65a17edcce.jpg",import .meta.url)
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
                     {Mitem.map((items,index)=>{
                         return(
                          <li className="navlist" key={index}>
                          <a className={items.cname} href={items.url}>{items.title}</a>
                      </li>
                     )})}
                
                   
                 </ul>
             </nav>
             <header>
                 <div className="logo">
                     <img src={logo} className="logoimg"/>
                 </div>
             </header>
            </>
        );
    }
}
 
export default Navbar;