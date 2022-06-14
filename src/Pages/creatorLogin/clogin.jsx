import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import '../Signup/Signup.scss'

const Clogin = () => {
    const nameRef = useRef()
    const passwordRef = useRef()
    const name = "clogin"
    const password = "123"
    const nav = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(nameRef.current && passwordRef.current){
        if(name===nameRef.current.value && password === passwordRef.current.value){
            alert("login success")
            localStorage.setItem("creator",true)
            nav("/creator")
        }else{
            console.log(nameRef.current.value,passwordRef.current.value);
            alert("login failed")
        }}
    }
  return (
    <>
    <Navbar />
    <div className="signup-container">
      <form className="signup-form">
        <h1 className="signup-title">CLOGIN</h1>
        <label htmlFor="name">Username</label>
        <input ref={nameRef} type="text" id='name' className='signup-input' />
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" id='password' className='signup-input' />
        <input onClick={handleSubmit}  type="submit" value="Sign In" className='btn-signup' />
      </form>
    </div>
  </>
  )
}

export default Clogin