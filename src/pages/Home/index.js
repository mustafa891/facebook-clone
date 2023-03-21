import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Feed, Widgets} from '../../components/'
import Header from '../../layouts/Header/'
import SideNav from "../../layouts/SideNav/"
import * as S from './style'

export default function Home() {

  const navigate = useNavigate()
  
  return (
    <>
    <Header />
    <S.Container>
      <SideNav />
        <Feed /> 
        <Widgets />
    </S.Container>
    </>
  )
}
