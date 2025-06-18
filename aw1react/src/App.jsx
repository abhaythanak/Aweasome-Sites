import React from 'react'
import './App.css';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/Page4/Page4';
import Page5 from './components/Page5/Page5';
import Page6 from './components/Page6/Page6';
import Page7 from './components/Page7/Page7';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <div id="main">
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
    </div>
    </>
    
  )
}

export default App