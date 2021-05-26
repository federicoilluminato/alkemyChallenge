import React, { createContext, useState } from 'react';

export const TeamContext = createContext();

const TeamProvider = ({children}) => {

    const [team,setTeam] = useState({
        members:[]
    });

    const data = { team, setTeam }

    return (
        <TeamContext.Provider 
        value={{
            data
            }}
        >
            {children}
        </TeamContext.Provider>
    )
}

export {TeamProvider}
export default TeamContext;