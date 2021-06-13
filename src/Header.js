import { Avatar,IconButton } from '@material-ui/core';
import React from 'react';
import AddCommentIcon from '@material-ui/icons/AddComment';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import "./Header.css";


function Header() {
    return (
        <div className="header">
        <Avatar/>
        <div className="conatiner">
        <IconButton><AddCommentIcon/></IconButton>
        <IconButton><AddToPhotosIcon/></IconButton>
        <IconButton><AirplanemodeActiveIcon/></IconButton>
        
        </div>
            
        </div>
    )
}

export default Header;
