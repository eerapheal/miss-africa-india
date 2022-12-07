import React, { useState } from 'react'
import LeftNav from './LeftNav';
import styled from 'styled-components';

const Styleburger = styled.div`
  
  .ham {
    display: flex;
    width: 2rem;
    height: 0.20rem;
    background-color: ${({open}) => open ? '#ccc' : '#333' };
  }

  .ham:nth-child(1) {
    transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  .ham:nth-child(2) {
    transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
     opacity: ${({open}) => open ? 0 : 1}
  }

  .ham:nth-child(3) {
    transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;
const Burger = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Styleburger open={open} onClick={() => setOpen(!open)}>
        <div className="hamburger">
        <div className="ham" />
        <div className="ham"/>
        <div className="ham"/>
        </div>
      </Styleburger>
      <LeftNav open={open}/>
  </>
  )
};
  
export default Burger;
