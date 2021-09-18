import React from 'react'
import './header.css';


export default function Header(){
    return(

    <header className="header">
        <nav className="nav_menu">

            <div className="logo">
                <img src="innopolis_logo.png" alt=""/>
            </div>

            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Library</a>
                </li>
            </ul>

        </nav>

        <nav className="user_menu">

            <div className="user_image">
                <img src="user_logo.jpg" alt=""/>
            </div>

            <div className="username">
                username
            </div>

            <input type="checkbox" id="check_menu"/>
                <label htmlFor="check_menu"></label>
                <div className="burger-line first-line"></div>
                <div className="burger-line second-line"></div>
                <div className="burger-line third-line"></div>
                <div className="burger-line fourth-line"></div>

                <nav className="main-menu">
                    <a href="">Personal library</a>
                    <a href="">Log out</a>
                </nav>
        </nav>

    </header>
    )

}