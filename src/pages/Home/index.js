import React from 'react'
import {Feed, Widgets} from '../../components/'
import Header from '../../layouts/Header/'
import SideNav from "../../layouts/SideNav/"
import * as S from './style'

export default function Home() {
  
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
