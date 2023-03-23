import React, { useContext } from 'react'
import LoginForm from '../../components/LoginForm'
import Section from '../../layouts/Section/'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../../context/UserContext"

export default function Login() {

  const {signIn} = useAuth()
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;
    
    signIn(email, password).then(message => {
       if(message !== "signIned") return;
       navigate("/")
    });

  }

  return (
    <Section>
      <LoginForm 
       submitHandler={submitHandler}/>
    </Section>
  )
}
