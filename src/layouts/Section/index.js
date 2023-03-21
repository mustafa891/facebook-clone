import React from 'react'
import * as S from "./style"

export default function Section({children}) {
  return (
    <S.Section>
       <S.Container>
         <div className='section__logo'>
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
         </div>
         {children}
       </S.Container>
    </S.Section>
  )
}
