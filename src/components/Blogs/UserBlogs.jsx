import React, { useState, useEffect } from 'react'
import './UserBlogs.css'
const EX = import.meta.env.VITE_EX 

const UserBlogs = () => {
    const [userBlogs, setUserBlogs] = useState([])

    useEffect(() => {
        fetch(EX+'/ex/userBlogs')
            .then(res => res.json())
            .then(res => setUserBlogs(res))
    }, [])

    return (
        <div>
            {userBlogs.map((userBlog) => {
                const { poster, _id, title, blog, author, __v } = userBlog
                const {data, contentType} = poster

                function Uint8ToString(u8a){
                    var CHUNK_SZ = 0x8000;
                    var c = [];
                    for (var i=0; i < u8a.length; i+=CHUNK_SZ) {
                      c.push(String.fromCharCode.apply(null, u8a.subarray(i, i+CHUNK_SZ)));
                    }
                    return c.join("");
                  }
                  
                  // Usage
                  var u8 = new Uint8Array(data.data);
                  var b64encoded = btoa(Uint8ToString(u8));
                  console.log(b64encoded)
                  
                return (
                    <div key={_id} className='UserBlogsDiv'>
                        <div className="UserBlogsPoster"><img className='UserBlogsImage' src={`data:image/jpeg;base64,${b64encoded}`} /></div>
                        <div className='UserBlogsTitle'>{title}</div>
                        <div className='UserBlogsBlog'>{blog}</div>
                        <div className='UserBlogsAuthor'>{author}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default UserBlogs
