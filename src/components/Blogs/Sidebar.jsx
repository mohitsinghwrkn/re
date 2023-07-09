import React from 'react'
import './Sidebar.css'
import blog from '../../assets/blog.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-head'>
      <div className='sidebar'>
        <div>
          <Link to="/userBlogs"><img className='sidebar-image' src={blog} alt="" /></Link><h3 style={{textAlign:'center'}}>Community Blogs</h3><hr /><hr /><h3 style={{textAlign:'center'}}>SOCIALS</h3>
          {/* <p style={{ textAlign: "center" }}>SOCIALS</p> */}
          <div className='sidebar-socials'>
            <a href="#" class="fa-brands sidebar-icons fa-facebook"></a>
            <a href="#" class="fa-brands sidebar-icons fa-twitter"></a>
            <a href="#" class="fa-brands sidebar-icons fa-google"></a>
            <a href="#" class="fa-brands sidebar-icons fa-linkedin"></a>
            <a href="#" class="fa-brands sidebar-icons fa-youtube"></a>
            <a href="#" class="fa-brands sidebar-icons fa-instagram"></a>
            <a href="#" class="fa-brands sidebar-icons fa-pinterest"></a>
            <a href="#" class="fa-brands sidebar-icons fa-snapchat-ghost"></a>
            <a href="#" class="fa-brands sidebar-icons fa-skype"></a>
            <a href="#" class="fa-brands sidebar-icons fa-android"></a>
            <a href="#" class="fa-brands sidebar-icons fa-dribbble"></a>
            <a href="#" class="fa-brands sidebar-icons fa-vimeo"></a>
            <a href="#" class="fa-brands sidebar-icons fa-tumblr"></a>
            <a href="#" class="fa-brands sidebar-icons fa-vine"></a>
            <a href="#" class="fa-brands sidebar-icons fa-foursquare"></a>
            <a href="#" class="fa-brands sidebar-icons fa-stumbleupon"></a>
            <a href="#" class="fa-brands sidebar-icons fa-flickr"></a>
            <a href="#" class="fa-brands sidebar-icons fa-yahoo"></a>
            <a href="#" class="fa-brands sidebar-icons fa-reddit"></a>
            <a href="#" class="fa-solid sidebar-icons fa-rss"></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
