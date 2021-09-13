import React from 'react'
import './header.css';


export default function Header(){
    return(

    <header className="header">
        <div className="header_logo">
            <img src="innopolis_logo.png"/>
        </div>

        <nav className="menu">
            <div id="home_button">
                <a href="">HOME</a>
            </div>

            <div id="library_button">
                <a href="">LIBRARY</a>
            </div>
        </nav>

        <div className="user_menu">
            <div className="profile_photo">
                <img src="user_logo.jpg"/>
            </div>
            <div className="user_name">
                <span>USERNAME</span>
            </div>
            <div className="menu_icon">
                &#9776;
            </div>
        </div>

    </header>
    )

}