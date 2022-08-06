import { useState } from "react"
import {  Navigate, useNavigate } from "react-router-dom"

export const Login =  () => {
    const [loginid,setloginid] = useState('')
    const [loginpass,setloginpass] = useState('')
    const handleChange = (e) => {
        setloginid(e.target.value)
    }
    const handleChangepass = (e) => {
        setloginpass(e.target.value)
    }

    // const handleSubmit = () => {

    // }
    
    return <>
    <input type="email" onChange={(e) => {handleChange(e)}} placeholder="Enter email id" />
    <br />
    <input type="password" onChange={(e) => {handleChangepass(e)}} placeholder ="Enter password" />
    <br/>
    <button >Submit</button>
    </>
}