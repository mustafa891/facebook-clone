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
         bg="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-6/336908718_626668085969626_4733583156119482401_n.jpg?stp=dst-jpg_s280x280&_nc_cat=111&ccb=1-7&_nc_sid=f7b297&_nc_ohc=plC0TiGbqD0AX_gIZby&_nc_ht=scontent.febl2-1.fna&oh=00_AfBmfU8sUq3XUYH8H4zEIe-n3eWKB6I9uds77udC43lxoQ&oe=641B9958"
         profileSrc="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-1/326288129_726508008941865_5439983568395365519_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=-IarSS3NWCYAX8w97-d&_nc_ht=scontent.febl2-1.fna&oh=00_AfAprYgxZfDDa8Uqw9Bg8I5ZPbPvmveZthwBKvlGiR61dA&oe=641B8553"
         />
         <Story 
          name="Amin Samad"
          bg="
          https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-6/336883356_1763173137411480_1739899786425781006_n.jpg?stp=dst-jpg_s280x280&_nc_cat=102&ccb=1-7&_nc_sid=4067ab&_nc_ohc=GTLauippZjkAX_S9goB&_nc_ht=scontent.febl2-1.fna&oh=00_AfBQaS9LJxltoGggACeAUKivMB9u__9E4UBWsNUsnGdSWg&oe=641BE787
          "
          profileSrc="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-1/292439800_575698850683415_9177979746417965934_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=f67be1&_nc_ohc=JL03H3lChfIAX8J80D3&_nc_ht=scontent.febl2-1.fna&oh=00_AfCyBfOXHicmNULZEGET-El3s-OkLYayJ7CNE294eO2o_w&oe=641BF8D9"
         />
         <Story
          name="Rudaw"
          bg="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-6/336529452_2191813397681848_8471347757286891901_n.jpg?stp=dst-jpg_s280x280&_nc_cat=1&ccb=1-7&_nc_sid=f7b297&_nc_ohc=MA9SmemaMzAAX9V9L5O&_nc_ht=scontent.febl2-1.fna&oh=00_AfCII60fd67tko9Vt9PuQGtOzaTQ8Pt5psD5jPSvWI8YvA&oe=641AD4BD"
          profileSrc="https://scontent.febl3-1.fna.fbcdn.net/v/t39.30808-1/331363559_732915424879814_2799854739895445595_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=maufZESKNNsAX8cU6eh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.febl3-1.fna&oh=00_AfD7nfGqN2Xy-YMdPqWyzBTrPdyVIzniNgJu45fkIfF44A&oe=641A3F40"
         />
         <Story
          name="NRT"
          bg="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-6/336800837_907931123860770_1783943093492535256_n.jpg?stp=dst-jpg_s280x280&_nc_cat=104&ccb=1-7&_nc_sid=f7b297&_nc_ohc=ahK9dT4jyJsAX_aXWzB&_nc_ht=scontent.febl2-1.fna&oh=00_AfAjhO3MYMifyo_DXnE34ICPJQQPT1U44S42ZcYkIhTUIw&oe=641AC2D5"
          profileSrc="https://scontent.fisu10-2.fna.fbcdn.net/v/t39.30808-1/310949064_430691132520757_6755032353287440002_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=2CL2-N7cHSYAX8TTixV&_nc_ht=scontent.fisu10-2.fna&oh=00_AfCZqxU92D6vYT_VrrCQt-kO6BgdqAHF7cVcqLNRJ5mbLQ&oe=641BFCA2"
         />
        </S.StorysContent>
      </S.Storys>

    </S.Wrapper>
  )
}
