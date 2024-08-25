import React from "react";
import { connect } from "react-redux";
import { AppBar } from "@mui/material";
import {Toolbar} from "@mui/material";
import {IconButton} from "@mui/material";
import {MenuItem} from "@mui/material";
import {Menu} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';



import { openDrawerActionCreator } from "../state/drawer";
import logo from '../img/logo.png'

const styles={
    toolbar :{justifyContent:'space-between'},
    logo:{cursor:'pointer'}
}
const MenuAppBar=props=>{
    const [anchorEl, setAnchorEl]=React.useState(null)
    const open = Boolean(anchorEl);

    const handleMenu=event=>{
        setAnchorEl(event.currentTarget);
    }
    const handleClose=()=>{
        setAnchorEl(null);
}
return (
    <div>
        <AppBar position="static">
            <Toolbar style={styles.toolbar}>
                <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="menu"
                onClick={props._drawerOpen}
                
                >
                    <MenuIcon />
                </IconButton>
                <img
                style={styles.logo}
                src={logo}
                alt="logo"
                />
                <div>
                    <IconButton
                    aria-label= "account of current user"
                    aria-controls= "menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    >
                        <SettingsIcon/>
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Zmień hasło</MenuItem>
                        <MenuItem onClick={handleClose}>Wyloguj sie</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    </div>
)
}
const mapDispatchToProps =(dispatch)=>({
    _drawerOpen: ()=> dispatch(openDrawerActionCreator())
})

export default connect(
    null,
    mapDispatchToProps
)(MenuAppBar)