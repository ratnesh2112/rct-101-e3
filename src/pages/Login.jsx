import React, { useState, useContext ,useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("")

  const {isAuth , updateAuth} = useContext(AuthContext);
  
  const handleSumit = (e) =>{

    e.preventDefault();

    axios({
    url : "https://reqres.in/api/login",
    method : "POST",
    data : {
      email,
      password,
    }
    })
    .then(res =>{

      alert("Login Success");
      updateAuth()

    })

   
  }

  if(isAuth)
  {
    return <Navigate to="/product" />
  }
  return (
    <div>
      <form onSubmit={handleSumit}>
        <div>
          <p>login</p>
        </div>
        <div>
         <input data-cy="login-email" value={email} type="email" placeholder="Enter Email.." onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
         <input data-cy="login-password" value={password} type="password" placeholder="Enter Pssword" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button data-cy="login-submit" type="submit">SUBMIT</button>
      </form>
      
    </div>
  );
};

export default Login;
