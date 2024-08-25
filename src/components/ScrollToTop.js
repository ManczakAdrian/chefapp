import React from "react"
import { useScrollTrigger, Zoom, Fab, } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const style = {
    div: { position: 'fixed', bottom: 20, right: 20 }

}

const onClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

}

const ScrollToTop = props => {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 70,
    })

    return (
        <Zoom
            in={true}>
            <div
                style={style.div}>
                onClick={onClick}
                <Fab
                    color="primary"
                    size='small'
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>

        </Zoom>
    )
}
export default ScrollToTop