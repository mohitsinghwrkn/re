import React from 'react'
import { Link } from "react-router-dom";
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

import './Tiles.css';

const Tiles = () => {
    return (
        <div className='tiles'>
            <Link to="/tiles/html" className='tile'>
                <img src={html} className='tile-image' />
                <h1 className="tile-title">HTML</h1>
            </Link>
            <Link to="/blogData?css" className='tile'>
                <img src={css} className='tile-image' />
                <h1 className="tile-title">CSS</h1>
            </Link>
            <Link to="/AdminBlogs" className='tile'>
                <img src={js} className='tile-image' />
                <h1 className="tile-title">JavaScript</h1>
            </Link>
            <Link to="/tiles/react" className='tile'>
                <img src={react} className='tile-image' />
                <h1 className="tile-title">React</h1>
            </Link>
            <Link to="/tiles/node" className='tile'>
                <img src={node} className='tile-image' />
                <h1 className="tile-title">NodeJS</h1>
            </Link>
            <Link to="/tiles/npm" className='tile'>
                <img src={npm} className='tile-image' />
                <h1 className="tile-title">NPM</h1>
            </Link>
            <Link to="/tiles/yarn" className='tile'>
                <img src={yarn} className='tile-image' />
                <h1 className="tile-title">Yarn</h1>
            </Link>
            <Link to="/tiles/vite" className='tile'>
                <img src={vite} className='tile-image' />
                <h1 className="tile-title">Vite</h1>
            </Link>
            <Link to="/tiles/jsx" className='tile'>
                <img src={jsx} className='tile-image' />
                <h1 className="tile-title">JSX</h1>
            </Link>
            <Link to="/tiles/tsx" className='tile'>
                <img src={tsx} className='tile-image' />
                <h1 className="tile-title">TSX</h1>
            </Link>
            <Link to="/tiles/express" className='tile'>
                <img src={ex} className='tile-image' />
                <h1 className="tile-title">Express</h1>
            </Link>
            <Link to="/tiles/mongoose" className='tile'>
                <img src={mong} className='tile-image' />
                <h1 className="tile-title">Mongoose</h1>
            </Link>
            <Link to="/tiles/angular" className='tile'>
                <img src={ang} className='tile-image' />
                <h1 className="tile-title">Angular</h1>
            </Link>
            <Link to="/tiles/bootstrap" className='tile'>
                <img src={bs} className='tile-image' />
                <h1 className="tile-title">BootStrap</h1>
            </Link>
            <Link to="/tiles/python" className='tile'>
                <img src={py} className='tile-image' />
                <h1 className="tile-title">Python</h1>
            </Link>
            <Link to="/tiles/mongodb" className='tile'>
                <img src={mdb} className='tile-image' />
                <h1 className="tile-title">MongoDB</h1>
            </Link>
            <Link to="/tiles/vue" className='tile'>
                <img src={vue} className='tile-image' />
                <h1 className="tile-title">Vue</h1>
            </Link>
            <Link to="/tiles/redux" className='tile'>
                <img src={redux} className='tile-image' />
                <h1 className="tile-title">Redux</h1>
            </Link>
            <Link to="/tiles/mern" className='tile'>
                <img src={mern} className='tile-image' />
                <h1 className="tile-title">MERN</h1>
            </Link>
        </div>
    )
}

export default Tiles
