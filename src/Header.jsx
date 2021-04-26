import React from 'react';
import logo4 from './images/logo4.png';
import MenuIcon from '@material-ui/icons/Menu';
const Header = ()=>{
    return (
        <>

        <div className="header">
            <MenuIcon style={{marginLeft:-25}}/>
            <img src={logo4} alt="logo" width="45" height="45" style={{marginLeft:20}}/>
            <h2 style={{marginLeft:10}}>Keep</h2>
        </div>
        </>
    );
}

export default Header;