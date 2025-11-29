import React, { createContext, useState } from 'react'
export const ThemeDataContext = createContext();    
const ThemeDataContext = (props) => {
    const [theme,setTheme] = useState("light");
  return (
    <ThemeDataContext.Provider value="rahul">
        {props.children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeDataContext