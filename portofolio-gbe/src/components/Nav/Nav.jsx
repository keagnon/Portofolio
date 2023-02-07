import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {BiBookAlt} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import  {useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
        <a href='#' onClick={() => setActiveNav('#')} className = {activeNav==='#' ? 'active':''}><AiOutlineHome/></a>
        <a href='#About' onClick={() => setActiveNav('About')} className = {activeNav==='About' ? 'active':''}><AiOutlineUser/></a>
        <a href='#Service' onClick={() => setActiveNav('Service')} className = {activeNav==='Service' ? 'active':''}><RiServiceFill/></a>
        <a href='#Experience' onClick={() => setActiveNav('Experience')} className = {activeNav==='Experience' ? 'active':''}><BiBookAlt/></a>
        <a href='#Contact' onClick={() => setActiveNav('Contact')} className = {activeNav==='Contact' ? 'active':''}><BiMessageSquareDetail/></a>
    </nav>
   
  )
}

export default Nav