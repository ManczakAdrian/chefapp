import { createTheme } from '@mui/material/styles';

import {grey, lightGreen} from '@mui/material/colors';


export default createTheme({
    palette: {
        primary :{
            light: lightGreen[200],
            main: lightGreen[800],
            dark: lightGreen[900],
            },
            secondary:{
                light:grey[400],
                main:grey[600],
                dark:grey[900],
            }
        }
    })