import React from 'react'
import './Create.css'
import Wallpaper from '../../assets/nat.jpg'

const AdminCreate = () => {
    return (
        <div className='create'>
            <img className='create-image' src={Wallpaper} alt="" />
            <form action="http://172.16.30.30:5555/ex/adminCreate" className='create-form' method="post" enctype="multipart/form-data">
                <h1 style={{ textAlign: "center" }}>Admin Create Portal</h1><hr />
                <label htmlFor="title">Title</label>
                <input type="text" name='title' /><br />
                <label htmlFor="poster">Poster</label>
                <input type="file" name='poster' required /><br />
                <label htmlFor="blog">Blog</label>
                <textarea name="blog" id="" cols="30" rows="10">PASTE FORMATTED BLOG HTML HERE</textarea><br />
                <label htmlFor="author">Author</label>
                <input type="text" name='author' /><br />
                <label htmlFor="bid">Unique ID</label>
                <input type="text" name='bid' /><br />
                <input style={{ backgroundColor: 'royalblue' }} type="submit" />
            </form>
        </div>
    )
}

export default AdminCreate
