import React from 'react'
import './Blogs.css'
import Sidebar from './Sidebar'
import Blog from './Blog';

const Blogs = () => {
  return (
    <>
      <div className='blogs'>
        <Blog/>
        <Sidebar/>
      </div>
    </>
  )
}

export default Blogs
