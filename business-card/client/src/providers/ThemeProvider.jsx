import React,{useContext,useEffect,useState,useCallback,useMemo} from 'react'
import {ThemeProvider as MuiThemeProvider,createTheme} from '@mui/material/styles';
import {node} from 'prop-types'
// import { ThemeContext } from '@emotion/react';

const ThemeContext = React.createContext()
export const ThemeProvider = ({children}) => {
    const [isDark,setDark] = useState(false)
    const toggleDarkMode = useCallback(()=>{
        setDark(prev => !prev)
    },[setDark])
    const theme = createTheme({palette:{mode:isDark?'dark':'light'}})

    const value = useMemo(()=>{return{isDark,toggleDarkMode}},[isDark,toggleDarkMode])
  return (
        <MuiThemeProvider theme={theme}>
            <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
  )
}
export const useTheme = ()=>{
    const context = useContext(ThemeContext)
    if(!context) throw new Error("useName Must be used within a NameProvider")
    return context

}
ThemeProvider.propTypes = {
    children: node.isRequired
}

export default ThemeProvider