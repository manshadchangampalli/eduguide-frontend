import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import './Signin.scss'

export default function Signin() {
  const [registerData, setRegisterData] = useState({
    password: "",
    name: ""
  });
  const nav = useNavigate()
  const handleLogin = (event) => {
    event.preventDefault();
    let BASE_URL = "http://localhost:5000/api/"
    if (registerData.name !== "" && registerData.password !== "") {
      fetch(`${BASE_URL}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(registerData)
      })
        .then(res => res.json())
        .then(data => {
          if (data.status !== 'error') {
            alert("login Success")
            localStorage.setItem("token", data.token)
            localStorage.setItem("name", registerData.name)
            localStorage.setItem("userId", data.userId)
            nav("/")
          }
          else {
            alert("login failed")
          }
        })
        .catch(err => {
          alert("login failed")
        })
    }
  }
  console.log(registerData);
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form">
          <h1 className="signup-title">LOGIN</h1>
          <label htmlFor="name">Username</label>
          <input onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} type="text" id='name' className='signup-input' />
          <label htmlFor="password">Password</label>
          <input onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} type="password" id='password' className='signup-input' />
          <input onClick={handleLogin} type="submit" value="Sign In" className='btn-signup' />
          <Link to={"/signup"}>create an account ?</Link>
          <Link to={"/creatorlogin"}>login as a creator ?</Link>
        </form>
      </div>
    </>
  )
}
