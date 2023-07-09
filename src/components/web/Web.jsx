import React from 'react'
import { Link } from "react-router-dom";
import './Web.css'
import gfg from '../../assets/gfg.png'
import rcrud from '../../assets/rcrud.png'

const Web = () => {
  return (
    <div className='tiles'>
            <Link to="https://www.geeksforgeeks.org/mern-stack/" target='blank' className='tile'>
                <img src={gfg} className='tile-image' />
                <h1 className="tile-title">MERN</h1>
            </Link>
            <Link to="/css" className='tile'>
                <img src={rcrud} className='tile-image' />
                <h1 className="tile-title">CRUD</h1>
            </Link>
    </div>
    )
}

export default Web
