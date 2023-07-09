import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import npm from '../../assets/npm.png';
import tsx from '../../assets/tsx.png';
import logo from '../../assets/logo.png';
import ex from '../../assets/ex.png';
import js from '../../assets/js.png';
import jsx from '../../assets/jsx.png';
import mong from '../../assets/mong.png';
import react from '../../assets/react.png';
import vite from '../../assets/vite.png';
import yarn from '../../assets/yarn.png';
import ker from '../../assets/ker.png';
import sud from '../../assets/sud.png';
import fsf from '../../assets/fsf.png';
import node from '../../assets/node.png';
import ang from '../../assets/ang.png';
import bs from '../../assets/bs.png';
import py from '../../assets/py.png';
import mdb from '../../assets/mdb.png';
import vue from '../../assets/vue.png';
import redux from '../../assets/redux.png';
import mern from '../../assets/mern.png';

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-blog">
        <Link to="/tiles/html">
          <img src={html} className="blog-image" />
        </Link>
        <h2 className="blog-title"><hr />
          HTML
        </h2>
        <h4 className="blog-description">
          HTML is a markup language for structuring web content. It uses tags to define elements, creating the foundation of webpages.</h4>
      </div>
      <div className="blog-blog">
        <Link to="/tiles/css">
          <img src={css} className="blog-image" />
        </Link>
        <h2 className="blog-title"><hr />
          CSS
        </h2>
        <h4 className="blog-description">
          CSS (Cascading Style Sheets) is a language used to style and format the appearance of HTML documents, including layout, colors, and typography.

        </h4>
      </div>
      <div className="blog-blog">
        <Link to="/tiles/js">
          <img src={js} className="blog-image" />
        </Link>
        <h2 className="blog-title"><hr />
          JavaScript
        </h2>
        <h4 className="blog-description">
          JavaScript (JS) is a high-level programming language used for web development. It enables dynamic content, interactivity, and client-side functionality.        </h4>
      </div>
      <div className="blog-blog">
        <Link to="/tiles/react">
          <img src={react} className="blog-image" />
        </Link>
        <h2 className="blog-title"><hr />
          React
        </h2>
        <h4 className="blog-description">
          React is a JavaScript library for building user interfaces. It allows for efficient UI updates through a component-based approach.




        </h4>
      </div>
      <div className="blog-blog">
        <Link to="/tiles/npm">
          <img src={npm} className="blog-image" />
        </Link>
        <h2 className="blog-title"><hr />
          NPM
        </h2>
        <h4 className="blog-description">
          npm (Node Package Manager) is a package manager for JavaScript, allowing developers to install, share, and manage dependencies for their projects.



        </h4>
      </div>
      <div className="blog-blog">
        <Link to="/tiles/yarn">
          <img src={yarn} className="blog-image" />
        </Link>
        <h2 className="blog-title"><hr />
          Yarn
        </h2>
        <h4 className="blog-description">
          Yarn is a package manager for JavaScript that efficiently manages dependencies and facilitates the development of web applications.        </h4>
      </div>
      <div className="blog-blog">
        <Link to="/tiles/html">
          <img src={node} className="blog-image" />
        </Link>
        <h2 className="blog-title"><hr />
          Node
        </h2>
        <h4 className="blog-description">
          Node.js is a JavaScript runtime environment that allows server-side execution of JavaScript code, enabling scalable and high-performance applications.        </h4>
      </div>
      <div className="blog-blog">
        <img src={vite} className="blog-image" />
        <h2 className="blog-title"><hr />
          Vite
        </h2>
        <h4 className="blog-description">
          Vite is a fast build tool for modern web development that emphasizes quick startup and efficient development workflows.        </h4>
      </div>
      <div className="blog-blog">
        <img src={jsx} className="blog-image" />
        <h2 className="blog-title"><hr />
          JSX
        </h2>
        <h4 className="blog-description">
          JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript, commonly used with React for building UI components.        </h4>
      </div>
      <div className="blog-blog">
        <img src={tsx} className="blog-image" />
        <h2 className="blog-title"><hr />
          TSX
        </h2>
        <h4 className="blog-description">
          TSX (TypeScript XML) is a syntax extension for TypeScript used in React to write components with JSX syntax.        </h4>
      </div>
      <div className="blog-blog">
        <img src={ex} className="blog-image" />
        <h2 className="blog-title"><hr />
          Express
        </h2>
        <h4 className="blog-description">
          Express is a minimal, fast, and flexible web application framework for Node.js that simplifies the development of server-side applications.        </h4>
      </div>
      <div className="blog-blog">
        <img src={ang} className="blog-image" />
        <h2 className="blog-title"><hr />
          Angular
        </h2>
        <h4 className="blog-description">
          Angular is a TypeScript-based framework for building web applications. It provides a modular structure and powerful features for development.        </h4>
      </div>
      <div className="blog-blog">
        <img src={bs} className="blog-image" />
        <h2 className="blog-title"><hr />
          BootStrap
        </h2>
        <h4 className="blog-description">
          Bootstrap is a popular front-end framework that provides pre-designed CSS and JavaScript components to build responsive and visually appealing websites.        </h4>
      </div>
      <div className="blog-blog">
        <img src={py} className="blog-image" />
        <h2 className="blog-title"><hr />
          Python
        </h2>
        <h4 className="blog-description">
          Python is a high-level, versatile programming language known for its simplicity, readability, and extensive libraries for various applications.        </h4>
      </div>
      <div className="blog-blog">
        <img src={mdb} className="blog-image" />
        <h2 className="blog-title"><hr />
          MongoDB
        </h2>
        <h4 className="blog-description">
          MongoDB is a NoSQL database that provides high performance, scalability, and flexibility for storing and retrieving data in JSON-like documents.        </h4>
      </div>
      <div className="blog-blog">
        <img src={vue} className="blog-image" />
        <h2 className="blog-title"><hr />
          Vue
        </h2>
        <h4 className="blog-description">
          Vue is a progressive JavaScript framework for building user interfaces, providing a reactive and component-based approach to web development.        </h4>
      </div>
      <div className="blog-blog">
        <img src={redux} className="blog-image" />
        <h2 className="blog-title"><hr />
          Redux
        </h2>
        <h4 className="blog-description">
          Redux is a predictable state management library for JavaScript applications, enabling centralized and efficient data flow in complex UIs.        </h4>
      </div>
      <div className="blog-blog">
        <img src={mern} className="blog-image" />
        <h2 className="blog-title"><hr />
          MERN
        </h2>
        <h4 className="blog-description">
          MERN is a stack for building web applications, comprising MongoDB, Express.js, React, and Node.js, providing a full JavaScript-based development environment.        </h4>
      </div>
      <div className="blog-blog">
        <img src={ex} className="blog-image" />
        <h2 className="blog-title"><hr />
          JavaScript
        </h2>
        <h4 className="blog-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur consectetur dolorem, tenetur dicta vel veritatis dolore inventore reiciendis beatae, hic eligendi quidem dolorum iure rerum, omnis vitae. Excepturi, cum.
        </h4>
      </div>
      <div className="blog-blog">
        <img src={ex} className="blog-image" />
        <h2 className="blog-title"><hr />
          JavaScript
        </h2>
        <h4 className="blog-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur consectetur dolorem, tenetur dicta vel veritatis dolore inventore reiciendis beatae, hic eligendi quidem dolorum iure rerum, omnis vitae. Excepturi, cum.
        </h4>
      </div>
      <div className="blog-blog">
        <img src={ex} className="blog-image" />
        <h2 className="blog-title"><hr />
          JavaScript
        </h2>
        <h4 className="blog-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur consectetur dolorem, tenetur dicta vel veritatis dolore inventore reiciendis beatae, hic eligendi quidem dolorum iure rerum, omnis vitae. Excepturi, cum.
        </h4>
      </div>
    </div>
  )
}

export default Blog
