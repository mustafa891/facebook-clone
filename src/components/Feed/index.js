import React, { useEffect } from 'react'
import { StoryReel } from '../StoryReel/'
import MessageSender from "../MessageSender/"
import * as S from "./style"
import Post from '../Post'
import { usePost } from '../../context/PostContext'
import Footer from '../../layouts/Footer'
import { useAuth } from '../../context/UserContext'

export default function Feed() {

  const {posts, getPosts} = usePost()
  const {user} = useAuth()

  useEffect(() => {
      getPosts() 
  }, [])

  return (
    <S.Feed>
      <StoryReel />
      <MessageSender />
        
        {posts?.map((post) => {
        return <Post className="anim"
         key={post.id}
         username={post.username}
         timestam={post.created_at}
         text={post.text}
         profileSrc={post.profileSrc}
         imgSrc={post.photoURL} 
         />
        })}
        <Footer />
{/* 
      <Post
       username="NRT4"
       timestam="17h"
       text="       
        بەخامەیاکی کولەوە
        باری سەرفەر تێک دەنێم و،
        بەدەستێکی لەرزۆکەوە
        گوڵزاری وەسفت تەیدەکەم.
        چ سەفەرێکی حەقیقییە
        میعراجی عەشقی تۆ
        چ حەجێکی نەمرییە
        تەوافی یادی تۆ.
        ئیلاهی نامە
        ئەکرەم عەنەبی
       "
       profileSrc="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-1/326560150_702628211346886_2499423621348932025_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=Hla-oiHY2dUAX_bSba3&_nc_ht=scontent.febl2-1.fna&oh=00_AfDgGiIpTfI_pUq8r82Qw3xDq1SRC_YUgBmZ1i9d9-HR6w&oe=641B115B"
       imgSrc="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-6/336685827_758681635581413_383682236205765526_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=A6hlrs8BHpAAX-Xnil6&_nc_ht=scontent.febl2-1.fna&oh=00_AfDUuMEP_dyRfy0pEG1Mw3mZEPewTTGijkwqZtpU0ro9HA&oe=641C9A0B"
      />

      <Post
       profileSrc="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-1/327551403_490530733158015_6470473743996322278_n.jpg?stp=c9.0.24.24a_cp0_dst-jpg_p24x24&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lxRBcQYv_WkAX_W5KTb&_nc_ht=scontent.febl2-1.fna&oh=00_AfAcfdImBUBAzrE7vnsSIxeBBX0uAkVarPcQjhidURrekg&oe=641ABD3F"
       username="Nariman Bahram"
       timestam="12h"
       imgSrc="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-6/336720371_1255947045048058_6800178133758259872_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=svMVduSCnE8AX-DB1uv&_nc_ht=scontent.febl2-1.fna&oh=00_AfCkB05quREV6Z5KD8Y5SamES2Gdv80A_zOSNoThiPJVtA&oe=641BE830"
       text="
       کۆرسێکى تەواو لەسەرەتا تاکو پێشکەتوو هى ماڵپەرى (udemy) فۆتۆشۆپ ٢٠٢٣ بە دیارى بۆ ئەو کاسانەى کە ١٠ هاورێى خۆى ئینفایتى گروپ بکات کە نرخى کۆرسەکە ٨٤دۆلارە تکایە ئەم کۆرسە تەنیا بۆ ئەو کاسانەى هاشتاگى تەواویان کردییە بۆ ئەوان دەبێت لە رێگاى تلیگرام بۆیان دەنێردرێت.
       "
      />
 */}
    </S.Feed>
  )
}
