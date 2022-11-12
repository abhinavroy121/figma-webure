import React from 'react'
import styled from 'styled-components';
import CombinedShape from '../assets/CombinedShape.svg';
import Oval from '../assets/Oval.svg';
import star from '../assets/star.png';
import moon from '../assets/moon.svg';
const DebitCard = () => {
  return ( <>
    <Card>
     <img src={CombinedShape} alt="" />
     <imgn id="oval1" src={Oval} alt="" />
     <img id="oval2" src={Oval} alt="" />
     <img id="star" src={star} alt="" />
     <img id="moon" src={moon} alt="" />
     <p id="cardNumber">Card number</p>
     <p id="Number">3829 4820 4629 5025</p>
     <p id="c_holder_name">card holder name</p>
     <p id="name">Abhinav Roy</p>
     <p id="valid">vaid thru</p>
     <p id="validDate">09/29</p>
    </Card>
    </>
  )
}
const Card=styled.div`
position:absolute;
  width: 400px;
height: 254px;
left: 1100px;
top: 700px;
border-radius:40px;
background: #F5E7E7;
 #oval1{
position: absolute;
width: 36px;
height: 36px;
border-radius:18px;
left: 80px;
top: 50px;
background: #FFFFFF;
 }
 #oval2{
position: absolute;
width: 36px;
height: 36px;
border-radius:18px;
left: 106px;
top: 50px;
background: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.36;
 }
 #star{
  position: absolute;

left: 239.35px;
top: 10px;
overflow:hidden;
z-index:-20px;
/* transform: rotate(-10deg); */
 }
 #moon{
  position: absolute;
width: 79px;
height: 83px;
left: 130px;
top: 126.42px;

 }
 #cardNumber{
  position: absolute;
height: 12px;
left:80px;
top: 90px;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
text-transform: uppercase;
color: #000000;

mix-blend-mode: normal;
opacity: 0.7;
 }
 #Number{
  
position: absolute;
height: 31px;
left: 80px;
top:95px;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 31px;
letter-spacing: 1.5px;
color: #000000;
 }
 #c_holder_name{
position: absolute;
height: 12px;
left: 80px;
top:190px;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal;
opacity: 0.7;
 }
 #name{
  position: absolute;
height: 21px;
left: 80px;
top: 200px;

font-family: 'SF Pro Text';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 21px;

color: #000000;
 }
 #valid{
  position: absolute;
height: 12px;
left: 300px;
top:190px;

font-family: 'SF Pro Text';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
text-transform: uppercase;

color: #000000;

mix-blend-mode: normal;
opacity: 0.7;
 }
 #validDate{
  position: absolute;
height: 21px;
left:  300px;
right: 7.27%;
top: 200px;

font-family: 'SF Pro Text';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 21px;

color: #000000;
 }


`
export default DebitCard;