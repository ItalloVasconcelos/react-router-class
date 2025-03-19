import React from 'react';
import './Menu.css'
import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <aside className="Menu">
           <nav>
               <ul>
                   <li>
                       <Link to="/">
                           Home
                       </Link>

                   </li>
                   <li>
                       <Link to="/about">
                           Sobre
                       </Link>
                   </li>
                   <li>
                       <Link to="/param/123">
                           Parametros #1
                       </Link>
                   </li>
                   <li>
                       <Link to="/param/SeuNome">
                           Parametros #2
                       </Link>
                   </li>
               </ul>
           </nav>
        </aside>
    )
}

export default Menu