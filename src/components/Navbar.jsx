import React from "react";
import styled from "styled-components";
import rabbit from "../assets/Icon_rabbit.png";
import styles from "../styles/Navbar.module.css";

const NavbarMain = styled.div`
//   position: absolute;
  width: 1292px;
  height: 53px;
  left: 74px;
  top: 7px;
  // border: 2px solid black;

  @media screen and (min-width: 768px)  and (max-width: 992px) {
   display:flex;
   // position: relative;
   width: 800px;
   // border: 1px solid black;
  }
`;

const Navone = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 122px;
  height: 26px;
  left: 130px;
  top: 48px;
  // border: 1px solid grey;
  @media screen and (min-width: 768px)  and (max-width: 992px) {
   margin-left: 200px;
  }
  @media screen and  (max-width: 767px) {
   margin-left: 200px;
  }
`;

const Datify = styled.span`
//   position: absolute;
  width: 48px;
  height: 24px;
  left: 108px;
  top: 50px;
  font-family: "Google Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #1a1d32;
//   border: 1px solid blue;
 
`;

const Navtwo = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 856px;
  height: 53px;
  left: 510px;
  top: 37px;
  // border: 1px solid black;
  @media screen and (min-width: 768px)  and (max-width: 992px) {
   display:flex;
   // position: relative;
   width: 800px;
  }
`;

const Navtwo1 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 446px;
  height: 37px;
  left: 510px;
  top: 53px;
  // border: 1px solid red;
`;
const Navtwo2 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 246px;
  height: 37px;
  // right: 610px;
  top: 53px;
  // border: 1px solid green;
`;

const Navbar = () => {
  return (
    <NavbarMain>
      <div>
        <Navone>
          <img id={styles.rabbit} src={rabbit} alt="" />
          <Datify>Datify</Datify>
        </Navone>
        <Navtwo>
          <Navtwo1 className={styles.navtwo1}>
            <p>Home</p>
            <p>Members</p>
            <p>Blog</p>
            <p>Privacy</p>
            <p>Contact</p>
          </Navtwo1>
          <Navtwo2>
            <p id={styles.login}>Log In</p>
            <span id={styles.registerspan}>
              <p>Register</p>
            </span>
          </Navtwo2>
        </Navtwo>
      </div>
    </NavbarMain>
  );
};

export default Navbar;
