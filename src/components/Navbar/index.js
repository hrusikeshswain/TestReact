import React from 'react';
import ReactDOM from 'react-dom';

import {
	Nav,
	NavLink,
	NavMenu,
	NavBtn,
	NavBtnLink,
	Bars,
}  from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav className="ml-auto">
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
       
      </Nav>
    </>
  );
};
  
export default Navbar;



//ReactDOM.render(<MyForm />,document.getElementById('root'));//html code ,html Element

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//React props for sending data ,component etc
//React  state to hold many value swhich acn be chnaged also inside form the constructor
//Component life cycle mounting - putting elements into DOM constructor()
//getDerivedStateFromProps()
//render()
//componentDidMount()
//The render() method is required and will always be called, the others are optional and will be called if you define them. ,updating,unmounting
