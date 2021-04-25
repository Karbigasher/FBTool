import React from 'react'
import {NavLink} from 'react-router-dom'



export const Navbar = () =>{


    
    return(
    <nav>
    <div className="nav-wrapper red darken-4" style={{padding: '0 2rem'}}>
      <a className="brand-logo" href='/'>FBTool</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/quizselect">Опрос</NavLink></li>
        <li><NavLink to="/auth">Вход</NavLink></li>
      </ul>
    </div>
  </nav>)
}