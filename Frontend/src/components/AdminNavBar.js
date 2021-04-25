import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../context/Auth.context'


export const AdminNavbar = () =>{


    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event =>{
      event.preventDefault()
      auth.logout()
      history.push('/')
    }
    return(
    <nav>
    <div className="nav-wrapper red darken-4" style={{padding: '0 2rem'}}>
      <a className="brand-logo" href='/'>FBTool</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/" onClick={logoutHandler}>Выход</a></li>
      </ul>
    </div>
  </nav>)
}