import React from 'react'
import BlogData from './components/Blogs/BlogData'

const Test = () => {
  return (
    <div>
      <div style={{textAlign:'center', fontSize:'32px', border:'2px solid black', margin:'1vw 25vw'}}>
        Testing React Component : <span style={{color:'green'}}>TEST OK <hr /> </span>
      </div>
      <BlogData/>
    </div>
  )
}

export default Test
