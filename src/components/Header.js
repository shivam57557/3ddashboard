import React from 'react';
import Addpost from './HeaderElements/Addpost';
import Help from './HeaderElements/Help';
import Logo from './HeaderElements/Logo';
import Navigation from './HeaderElements/Navigation';
import Notification from './HeaderElements/Notification';
import SearchBar from './HeaderElements/SearchBar';
import Username from './HeaderElements/Username';
import './CSS/Header.css'

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Navigation />
            <SearchBar />
            <Username firstName={`Shivam`} lastName={`Tripathi`} />
            <Notification />
            <Addpost />
            <Help />
        </div>
    )
}

export default Header;
