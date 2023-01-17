import React, { useState, useContext,useCallback } from "react";
import { node } from "prop-types";
import { Snackbar, Alert } from "@mui/material";

const SnackBarContext = React.createContext(null);

export const SnackBarProvider = ({ children }) => {
    const [isSnackOpen, setOpenSnack] = useState(false);
    const [SnackColor, setSnackColor] = useState("success");
    const [SnackVariant, setSnackVariant] = useState("filled");
    const [SnackMessage, setSnackMessage] = useState("in SnackBar!");

    const setSnack = useCallback((color,message,variant="filled")=>{
        setOpenSnack(true)
        setSnackColor(color)
        setSnackVariant(variant)
        setSnackMessage(message)
    },[])
    

  return (
    <>
      <Snackbar 
      anchorOrigin={{vertical:"top",horizontal:"center"}}
      open={isSnackOpen}
      onClose={()=>setOpenSnack(prev=>!prev)}
      autoHideDuration={5000}
      >
        <Alert severity={SnackColor} variant={SnackVariant}>{SnackMessage}</Alert>
      </Snackbar>
      <SnackBarContext.Provider value={setSnack}>
        {children}
      </SnackBarContext.Provider>
    </>
  );
};

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);
  if (!context)
    throw new Error("useSnackBar must be used within a SnackBarProvider");
  return context;
};

SnackBarProvider.propTypes = {
  children: node.isRequired,
};
