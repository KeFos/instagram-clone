import React, { Component } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TelegramIcon from '@material-ui/icons/Telegram';

import { Link } from 'react-router-dom';

import './Header.css';



class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="Header__navbar">

                    {/* Logo */}
                    <h4 className="Logo">INSTAGRAM</h4>

                    {/* Search bar */}
                    <form className="Searchbar">
                        <input type="text" placeholder="Search"/>
                    </form>

                    {/* Menu */}
                    <div className="Menu">
                        <Link to="/"><HomeIcon/></Link>
                        <Link to="/chats"><TelegramIcon/></Link>
                        <ExploreOutlinedIcon/>
                        <FavoriteBorderIcon/>
                        <AccountCircleIcon/>
                    </div>

                </div>
            </header>
        )
    }
}

export default Header;
