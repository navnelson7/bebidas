import React,{createContext,useContext,useEffect, useState} from 'react';
import axios from 'axios';
//creando el context
export const ModalContext = createContext();
const ModalProvider = (props) => {
    //state del provider
    const [idreceta, guardarIdReceta] = useState(null);
    const [receta, guardarReceta] = useState({});
     //llamado a la api con el id de la receta
     useEffect(()=>{
        const obtenerReceta = async () =>{
            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado = await axios.get(url);
            guardarReceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    })
    return (
        <ModalContext.Provider
            value={{
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;