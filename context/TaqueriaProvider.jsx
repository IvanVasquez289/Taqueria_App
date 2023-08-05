import { useState, createContext, useEffect } from "react";

const TaqueriaContext = createContext()

const TaqueriaProvider = ({children}) => {
    const [hola, setHola] = useState('Hola mundo')
    return (
        <TaqueriaContext.Provider
            value={{
                hola
            }}
        >
            {children}
        </TaqueriaContext.Provider>
    )
}

export {
    TaqueriaProvider
}

export default TaqueriaContext