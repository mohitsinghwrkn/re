import React from 'react'
import './Dev.css'
import auth from '../../assets/auth.png'
import rcrud from '../../assets/rcrud.png'
import rpc2 from '../../assets/rpc2.png'
import todo from '../../assets/todo.png'
import test from '../../assets/test.png'
import be4 from '../../assets/be4.png'
import create from '../../assets/create.png'

const Dev = () => {
  return (
    <>
      <div className='dev'>
        <div className='dev-box' >
          <a href="/login" className='dev-anchor'>
            <img src={auth} alt="" className='dev-image' />
          </a>
          <div className='dev-heading'>
            <hr />
            Authentication
            <hr />
          </div>
        </div>
        <div className='dev-box' >
          <a href="/crudOps" className='dev-anchor'>
            <img src={rcrud} alt="" className='dev-image' />
          </a>
          <div className='dev-heading'>
            <hr />
            CRUD Operations
            <hr />
          </div>

        </div>
        <div className='dev-box' >
          <a href="/game" className='dev-anchor'>
            <img src={rpc2} alt="" className='dev-image' />
          </a>
          <div className='dev-heading'>
            <hr />
            Rock Paper Scissor Lizard Spock
            <hr />
          </div>

        </div>

        <div className='dev-box' >

          <a href="/todo" className='dev-anchor'>
            <img src={todo} alt="" className='dev-image' />
          </a>
          <div className='dev-heading'>
            <hr />
            Todo List
            <hr />
          </div>
        </div>
        <div className='dev-box' >
          <a href="/adminCreate" className='dev-anchor'>
            <img src={create} alt="" className='dev-image' />
          </a>
          <div className='dev-heading'>
            <hr />
            Admin Create
            <hr />
          </div>
        </div>
        <div className='dev-box' >
          <a href="/test" className='dev-anchor'>
            <img src={test} alt="" className='dev-image' />
          </a>
          <div className='dev-heading'>
            <hr />
            TESTING
            <hr />
          </div>
        </div>
        <div className='dev-box' >
          <a href="/backend" className='dev-anchor'>
            <img src={be4} alt="" className='dev-image' />
          </a>
          <div className='dev-heading'>
            <hr />
            BACKEND
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dev
