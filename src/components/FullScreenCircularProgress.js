import { CircularProgress } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

const styles = {
  div: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(36,41,41,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
    circular:{color:'#ffff33'}
};

const FullScreenCircularProgress = props => {
  console.log(props)
  return (
    props._isOpen.length>0 ?
    <div style={styles.div}>
      <CircularProgress 
      style={styles.circular}
      size={100}
      />
    </div>
    :
    null
  );
};

const mapStateToProps = state => ({
_isOpen: state.fullScreenCircularProgress.circurals

});
export default connect(
  mapStateToProps,
  
)(FullScreenCircularProgress);
