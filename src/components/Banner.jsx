import React from 'react'
import styles from '../styles/Banner.module.css'
import styled from 'styled-components';
import Union from "../assets/Union.png";
import image from "../assets/image.png";
import ring from "../assets/ring.png";
import like from "../assets/like.png";
import wine from "../assets/wine.png";
import heart from "../assets/heart.png";
import calender from "../assets/calender.png";
const Input = styled.div`
// position: absolute;
display:flex;
justify-content:space-between;
width: 515px;
height: 68px;
left: 140px;
top: 600px;
background: #FFFFFF;
border-radius: 40px;
margin-top:15px;
margin-left:140px;
`
const MainBanner = styled.div`
 margin-top: 125px;
`
const Posters = styled.div`

`
const Ring = styled.div`
position: absolute;
width: 70px;
height: 70px;
left: 782px;
top: 132px;

background-color: white;
border-radius:50px;
`

const Like = styled.div`
position: absolute;
width: 44px;
height: 44px;
left: 1077px;
top: 156px;
background: #EE0F32;
border-radius:50px;
`
const Wine = styled.div`
position: absolute;
width: 35px;
height: 35px;
left: 704px;
top: 343px;
background: #EE0F32;
border-radius:50px;
`

const Heart = styled.div`
position: absolute;
width: 69px;
height: 69px;
left: 1235px;
top: 326px;
background: #FFFFFF;
border-radius:50px;
`
const Calender = styled.div`
position: absolute;
width: 77px;
height: 77px;
left: 1235px;
top: 576px;
border-radius:50px;
background-color: white;
`

const Banner = () => {
    // Main div => inside two inner main div
  return (
    <div style={{border: '1px solid black'}}>   
        <MainBanner>
            <div>
                <p id={styles.deserverbetter}>Because you deserve better</p>
                <p>Get noticed for <span>who</span> you are, <span>not what</span> you look like.</p>
                <p id={styles.para}>You're more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Because you deserve what dating deserves:better.</p>
                <Input className={styles.inputdiv}>
               <div>
               <img src={Union} alt="" />
                <p id={styles.email}>Enter your email</p>
               </div>
               <span id={styles.register}><p>Get Started</p></span>
                </Input>
            </div>
            <div></div>
        </MainBanner>


        <Posters>
           <img id={styles.mainimage} src={image} alt="" />
            <Ring> <img src={ring} alt="" /></Ring>
            <Like id={styles.likeicon}> <img src={like} alt="" /> </Like>
            <Wine id={styles.wine}> <img src={wine} alt="" /> </Wine>
            <Heart id={styles.heart}> <img src={heart} alt="" /> </Heart>
            <Calender id={styles.calender}> <img src={calender} /></Calender>
        </Posters>
    </div>
  )
}

export default Banner