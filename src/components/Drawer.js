import React from "react"
import { connect } from "react-redux"
import { SwipeableDrawer, List, ListItemText, ListItem } from "@mui/material"
import { openDrawerActionCreator, closeDrawerActionCreator } from "../state/drawer"

import { withRouter } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const links = [
    { title: 'Dodaj przepis', route:'/add-recipe' },
    { title: 'Twoje przepisy', route:'/your-recipes' },
    { title: 'Przepisy', route:'/recipes' },
]

const Drawer = props => {
    
    console.log(props)

    return (

        <SwipeableDrawer
            open={props._isOpen}
            onClose={props._close}
            onOpen={props._open}
        >
            <List>
                {links.map(link => (
                    <ListItem
                    onClick={()=>{
                    props._close()
                    props.history.push(link.route)
                }}
                    button={true}
                        key={link.title}>
                        <ListItemText
                            key={link.title}
                            primary={link.title}
                        />
                    </ListItem>
                ))}
            </List>
        </SwipeableDrawer>
    )
}

const mapStateToProps = state => ({
    _isOpen:state.drawer.isOpen
})

const mapDispatchToProps = dispatch => ({
    _open:()=>dispatch(openDrawerActionCreator()),
    _close:()=>dispatch(closeDrawerActionCreator())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Drawer))
