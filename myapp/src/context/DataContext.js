import React, { useState } from "react";
const DataContext = React.createContext();

function DataProvider ({children}) {
    const [openModal , setOpenModal]=useState(false);
    return(
        <DataContext.Provider value = {{
            openModal,setOpenModal
        }} >
            {children}
        </DataContext.Provider>
    )
}

export{DataProvider, DataContext}