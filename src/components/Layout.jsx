import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ico from '../favicon.ico';
import './Layout.css';
import Footer from './Footer';
import LoginButton from './Authentication/LoginButton'
import LogoutButton from './Authentication/LogoutButton'

const Layout = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const login = isAuthenticated;
    return (
        <div>
            <div className='layout'>
                <div className='layout-left'>
                    <Link to="/" className="layout-link">🌏</Link>
                    <Link to="home" className="layout-link">Home</Link>
                    <Link to="blogs" className="layout-link">Blogs</Link>
                    <Link to="create" className="layout-link">Create</Link>
                    <Link to="aboutus" className="layout-link">AboutUs</Link>
                </div>
                <div className='layout-center'>
                    {/* <Link to="dev" className="layout-link layout-dev">|</Link> */}
                    <Link to="dev" className="layout-link layout-dev">DEV</Link>
                    <Link to="" className="layout-link">|</Link>
                    <Link to="web" className="layout-link layout-web">WEB</Link>
                    {/* <Link to="dev" className="layout-link layout-dev">|</Link> */}
                </div>
                <div className='layout-right'>
                    <Link to="https://www.google.com/" target="blank" className="layout-link">[Search]</Link>
                    {login ? < LogoutButton /> : <LoginButton />}
                    {login ? <Link to="profile" className="layout-link"><i className='fas fa-user-check' style={{fontSize:"2.5vw", color:"green"}}></i></Link> : <Link to="profile" className="layout-link"><i className='fas fa-user-alt' style={{fontSize:"2.5vw"}}></i></Link>}
                </div>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;
