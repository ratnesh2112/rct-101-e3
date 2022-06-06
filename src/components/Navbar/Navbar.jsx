import React, { useContext } from "react";

import styles from "./navbar.module.css";

import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {

  const {isAuth , updateAuth} = useContext(AuthContext);

  const handleClick = () =>{

    if(!isAuth)
    {
      updateAuth()
    }
    else{
      updateAuth()
      return <Navigate to="/login" />
    }
  }
  return (
    <div data-cy="navbar" className={styles.navbar} >
      <Link data-cy="navbar-home-link" to="/">Logo</Link>
      <Link to="/login"></Link>
      <div className={styles.login}>
        <span data-cy="navbar-cart-items-count">Cart : (1)</span>
        <button data-cy="navbar-login-logout-button" onClick={handleClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;
