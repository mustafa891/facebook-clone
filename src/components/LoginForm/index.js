import React from 'react'
import { Link } from 'react-router-dom'
import * as S from "./style"

export default function LoginForm({submitHandler}) {
  return (
    <S.Container>
        <S.Wrapper>
            <h4>Log into Facebook</h4>
            <S.CustomeForm onSubmit={submitHandler}>
                <S.InputGroup>
                <input name="email" placeholder='Email' type="Email address" />
                </S.InputGroup>
                
                <S.InputGroup>
                <input name="password" type="password" placeholder='Password' />
                </S.InputGroup>

                <button className='login_btn'>Log In</button>

                <div className='links'>
                    <Link to="#">Forget account</Link>
                    <Link to="/register">Sign up for Facebook</Link>
                </div>

            </S.CustomeForm>
        </S.Wrapper>
    </S.Container>
  )
}
