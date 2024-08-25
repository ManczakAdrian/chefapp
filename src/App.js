import React from "react";
import FullScreenCircularProgress from "./components/FullScreenCircularProgress";
import Snackbars from "./components/Snackbars";
import ScrollToTop from "./components/ScrollToTop";
import AppBar  from "./components/AppBar";
import Drawer from "./components/Drawer";
import { BrowserRouter } from 'react-router-dom';



const App = (props) => {
  return (
    <div>
      <BrowserRouter>
      <AppBar/>
      <Drawer/>
      </BrowserRouter>
      
{/* 
      <FullScreenCircularProgress/>
       */}      
      <Snackbars/>
      <ScrollToTop/>
    </div>
  );
};
export default App;
