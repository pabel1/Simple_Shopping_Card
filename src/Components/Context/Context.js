import React from 'react';
import Data from '../../Data'
import { useState } from 'react';

export const DataContext= React.createContext();

export  function DataContextProvider({children}){
    const [course,setCourse]=useState(Data);
    const [card,setCard]=useState([]);

    const hundler=()=>{
        console.log("han ");
        // const newCard= [...card,course];
        // setCard(newCard);
        // console.log(newCard);

    };


    return (
    <DataContext.Provider value={[course]} hundler={hundler}>
        {children}

    </DataContext.Provider>

    );
}
