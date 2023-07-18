import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Create from './components/Create/Create'
import AdminCreate from './components/Create/AdminCreate'
import Backend from './Backend/Backend';
import AboutUs from './components/AboutUs';
import Dev from './components/dev/Dev';
import Nothing from './components/Nothing';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Web from './components/web/Web';
import CrudOps from './components/dev/CrudOps';
import Game from './components/dev/Game/Game';
import DisplayTodo from './components/dev/todo/DisplayTodo';
import CreateTodo from './components/dev/todo/CreateTodo';
import Profile from './components/Authentication/Profile';
import Test from './Test'
import UserBlogs from './components/Blogs/UserBlogs';
import TilesHtml from './components/Blogs/content/TilesHtml';
import BlogData from './components/Blogs/BlogData';
import AdminBlogs from './components/Blogs/AdminBlogs';
import MatrixRain from './components/dev/MatrixRain'

const App = () => {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
    {/* <div style={{border:"2px solid orangered"}}>
      mohit: this is a testing prototype! env {import.meta.env.VITE_SOME_KEY}
    </div> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path='create' element={<Create/>}/> 
          <Route path='AdminCreate' element={<AdminCreate/>}/> 
          <Route path='userBlogs' element={<UserBlogs/>}/> 
          <Route path='AdminBlogs' element={<AdminBlogs/>}/> 
          <Route path='backend' element={<Backend/>}/> 
          <Route path='aboutUs' element={<AboutUs/>}/> 
          <Route path='dev' element={<Dev/>}/> 
          <Route path='web' element={<Web/>}/> 
          <Route path='crudOps' element={<CrudOps/>}/> 
          <Route path='login' element={<Login/>}/> 
          <Route path='register' element={<Register/>}/> 
          <Route path='game' element={<Game/>}/> 
          <Route path='matrixRain' element={<MatrixRain/>}/> 
          <Route path='test' element={<Test/>}/>
          <Route path='todo' element={<DisplayTodo/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='blogData' element={<BlogData/>}/>
          <Route path='tiles/html' element={<TilesHtml/>}/>
          <Route path='*' element={<Nothing/>}/> 
        </Route >
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
