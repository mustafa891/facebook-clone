import React from 'react'
import Story from "./Story"
import * as S from "./style"

export  function StoryReel() {
  return (
    <S.Wrapper>
      
      <S.Tabs>
        <S.TabContent>
        <S.Tab className='active'>
          <img src='images/story.svg' />
          <p>Stories</p>
        </S.Tab>

        <S.Tab>
          <img src='images/reels.svg' />
          <p>Reels</p>
        </S.Tab>
        
        <S.Tab>
          <img src='images/rooms.svg' />
          <p>Rooms</p>
        </S.Tab>

        </S.TabContent>
      </S.Tabs>

      <S.Storys>
        <S.StorysContent>
         <Story
         name="XYZ"
         bg="images/storys/story4.jpg"
         profileSrc="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-1/326288129_726508008941865_5439983568395365519_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=-IarSS3NWCYAX8w97-d&_nc_ht=scontent.febl2-1.fna&oh=00_AfAprYgxZfDDa8Uqw9Bg8I5ZPbPvmveZthwBKvlGiR61dA&oe=641B8553"
         />
         <Story 
          name="Adham"
          bg="images/storys/story3.jpg"
          profileSrc="images/friends/adham.jpg"
         />
         <Story
          name="Abdulbari F. Basheer"
          bg="images/storys/story1.jpg"
          profileSrc="images/friends/abdulbari.jpg"
         />
         <Story
          name="Ahmad M. Kurd"
          bg="images/storys/story2.jpg"
          profileSrc="images/friends/ahmad.jpg"
         />
        </S.StorysContent>
      </S.Storys>

    </S.Wrapper>
  )
}
