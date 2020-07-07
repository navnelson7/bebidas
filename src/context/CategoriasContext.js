import React, {createContext,useState} from 'react';
//crear el context
export const CategoriasContext = createContext();
//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    //crear el state del context
    const [hola] = useState('hola desde el state ');

    return (
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;