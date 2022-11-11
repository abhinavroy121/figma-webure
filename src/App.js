import React from 'react'
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import styled from "styled-components";

const Main = styled.div`
position: absolute;
width: 1499px;
height: 990px;
background: #FEF1E6;
`

function App() {
  return (
    <Main className="App">
      <Navbar/>
       <Banner/>
    </Main>
  );
}

export default App;
