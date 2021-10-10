import React from 'react';
import './header.css';
import Authorization from "../forms/authorization";
import Registration from "../forms/registration";


export default function Header(){
    const username = localStorage.getItem('username')
    const [showAuth, setShowAuth] = React.useState(false)
    const [showReg, setShowReg] = React.useState(false)
    function handleLogIn(){
        setShowAuth(!showAuth);
    }
    function openReg(){
        setShowReg(!showReg);
        setShowAuth(!showAuth);
    }
    function handleLogOut(){
        localStorage.clear()
        window.location.reload();
    }
    return(
    <header className="header">
        <nav className="nav_menu">

            <div className="logo">
                <img src={"../innopolis_logo.png"} alt=""/>
            </div>

            <ul>
                {username ? (
                    <li>
                        <a href="/home">Home</a>
                    </li>
                ) : null}

                <li>
                    <a href="/">Library</a>
                </li>
            </ul>

        </nav>

        <nav className="user_menu">

            {username ? (
                <div className={'block'}>
                    <div className="user_image">
                        <img src="../user_logo.jpg" alt=""/>
                    </div>
                    <div className="username">
                        {username}
                    </div>
                </div>): null}


            <input type="checkbox" id="check_menu"/>
                <label htmlFor="check_menu"></label>
                <div className="burger-line first-line"></div>
                <div className="burger-line second-line"></div>
                <div className="burger-line third-line"></div>
                <div className="burger-line fourth-line"></div>

                <nav className="main-menu">
                    {username ? <a href="/home">Personal library</a> : null}
                    {username ? <a onClick={handleLogOut}>Log out</a> : <a onClick={handleLogIn}>Log in</a>}

                </nav>
        </nav>
        <Authorization active={showAuth} setActive={handleLogIn} openReg={openReg}/>
        <Registration active={showReg} setActive={openReg}/>

    </header>
    )

}