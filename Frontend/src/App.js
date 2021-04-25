import React from 'react'
import 'materialize-css'
import {BrowserRouter as Router, Redirect} from 'react-router-dom'
import { useRoutes } from './routes';
import {useAuth} from './hooks/auth.hook'
import { AuthContext } from './context/Auth.context';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import { AdminNavbar } from './components/AdminNavBar';


function App() {
  const {token, login, logout, userId}= useAuth()
  const isAuthentificated = !!token
  const routes = useRoutes(isAuthentificated)
  
    
  return (
    <AuthContext.Provider value ={{
      token, login, logout, userId, isAuthentificated
    }}>
    <Router>

      {isAuthentificated && <AdminNavbar />}
      {!isAuthentificated && <Navbar />}
      
      <div className="container">
        {routes}
      </div>
      {isAuthentificated && <Redirect to="/admin"/>}
     
      <Footer/>
    </Router>
    </AuthContext.Provider>
    
  )
}

export default App;
