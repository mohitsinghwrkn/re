import React from 'react'
import './Create.css'
import Wallpaper from '../../assets/nat.jpg'

const Create = () => {
  return (
    <div className='create'>
        <img className='create-image' src={Wallpaper} alt="" />
        <form action="http://172.16.30.30:5555/ex/create" className='create-form' method="post" enctype="multipart/form-data">
          {/* <div>Create BLOGS as Administrator</div> */}
          <h1 style={{textAlign:"center"}}>Create BLOG Here</h1><hr />
          <label htmlFor="title">Title</label>
          <input type="text" name='title'/><br />
          <label htmlFor="poster">Poster</label>
          <input type="file" name='poster' required /><br />
          <label htmlFor="blog">Blog</label>
          <textarea name="blog" id="" cols="30" rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis id possimus placeat neque aliquam deleniti rem provident. Voluptatibus, voluptates dolorum repudiandae consequatur eos accusamus numquam tempora illo aliquam quas!</textarea><br />
          <label htmlFor="author">Author</label>
          <input type="text" name='author' /><br />
          <input style={{backgroundColor:'royalblue'}} type="submit" />
        </form>
    </div>
  )
}

export default Create
