import React from 'react'
import Header from '../../layouts/Header/'
import SideNav from "../../layouts/SideNav/"
import * as S from './style'

export default function Home() {
  return (
    <>
    <Header />
    
    <S.Container>
      <SideNav />
        {/* SideNav */}
        {/* Fedd --> store__reel --> story | message_sender */} 
        {/* Widgets */}
    </S.Container>
    </>
  )
}
