import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Signup.scss'

export default function Signup() {
  const nav = useNavigate()
  const [err, seterr] = useState(false)
  const [cPass, setCpass] = useState("")
  const [registerData, setRegisterData] = useState({
    password: "",
    name: ""
  });
  useEffect(() => {
    if (cPass !== registerData.password) {
      seterr(true)
    } else {
      seterr(false)
    }
  }, [cPass])

  const handleLogin = (event) => {
    event.preventDefault();
    if (!err) {
      let BASE_URL = "http://localhost:5000/api/"
      if (registerData.name !== "" && registerData.password !== "") {
        fetch(`${BASE_URL}auth/signup`, {
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
              nav("/");
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
  }
  console.log(registerData);
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form">
          <h1 className="signup-title">Signup</h1>
          <label htmlFor="name">Username</label>
          <input onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} type="text" id='name' className='signup-input' />
          <label htmlFor="password">Password</label>
          <input onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} type="text" id='password' className='signup-input' />
          <label htmlFor="c-password">Confirm Password</label>
          <input onChange={(e) => setCpass(e.target.value)} type="password" id='c-password' className='signup-input' />
          {err &&
            <small style={{ color: "red" }}>the password is not matching</small>}
          <input onClick={handleLogin} type="submit" value="Signup" className='btn-signup' />
          <Link to={"/login"}>Already Have an account ?</Link>
        </form>
      </div>
    </>
  )
}
