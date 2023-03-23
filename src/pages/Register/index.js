import React from 'react'
import RegisterForm from '../../components/RegisterForm'
import Section from '../../layouts/Section'
import { useNavigate } from 'react-router-dom';
import { useAuth} from '../../context/UserContext';

export default function Register() {

  const { createUser} = useAuth()
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const file = e.target.file.files[0]
    if(!file) alert("Please select image")
    else {

    const fname = e.target.fname.value
    const lname = e.target.lname.value
    const email = e.target.email.value
    const password = e.target.password.value
    const fileType = file.type.split("/")[0];

    if(fileType !== "image") alert("Please select image")
    else {
    createUser(fname, lname, email, password, file).then((message) => {
      if(message != "created") return;
        navigate("/")
      })
  }
}
}

  return (
    <Section>
       <RegisterForm  
        submitHandler={submitHandler}/>
    </Section>
  )
}