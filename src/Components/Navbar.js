import React from "react";
import logo from "/Users/ajayjha/my-app/src/images/logo.png";
import './navbar.css';
const Navbar = () => {
    return(
        <>
            <nav className="main-nav">
            <div className="nav-background">
                <svg width="1440" height="136" viewBox="0 0 1440 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1445" height="136" fill="black"/>
                </svg>
            </div>
                {/* LOGO */}
                <div className="logo">
                    <img src = {logo}/>
                </div>

                {/* Company Name */}
                <div className= "company-name">
                    <h1>MATRIX LABS</h1>
                </div>

                {/* MENU */}
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href = "#">Home</a>
                        </li>
                        <li>
                            <a href = "#">About</a>
                        </li>
                        <li>
                            <a href = "#">Whitepaper</a>
                        </li>
                        <li>
                            <a href = "#">Audit</a>
                        </li>
                        <li>
                            <a href = "#">Telegram</a>
                        </li>
                    </ul>
                </div>
                <div className="connect">
                    
                    <h2>CONNECT</h2>
                </div>
            </nav>
            <section className="middle-section">
                <h1>The Kuppy System</h1>
                <p>The Kuppy Clans Ecosystem Consist of our two Native</p>
                <p>Tokens -Canine Master and Feline Master</p>

            </section>
        </>
    )
}

export default Navbar;