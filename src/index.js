import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux'
import{store} from './store'

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js'

import App from './App'
import { addSnackbar } from './state/snackbars.js';

// import { circularProgress } from './state/fullScreenCircularProgress.js';
// window.addCircural=()=>store.dispatch(circularProgress.add())
// window.removeCircural=()=>store.dispatch(circularProgress.remove())

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>  
    <App />
    </ThemeProvider>
    
  </Provider>,
  document.getElementById("root")
);
