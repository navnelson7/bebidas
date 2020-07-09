import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const RecetasContext = createContext();
const RecetasProvider = (props) => {
    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    })
     //agregando estate para consultar 
     const [consultar, guardarConsultar] = useState(false);
     const {nombre, categoria} = busqueda;
     //agregando useEffect
     useEffect(() =>{
         if(consultar){
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                const resultado = await axios.get(url);
                //console.log(resultado);
                guardarRecetas(resultado.data.drinks);
         }
         obtenerRecetas();
         }
 
        
     },[busqueda,categoria,consultar,nombre]);
    return (
        <RecetasContext.Provider
            value = {{
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}
export default RecetasProvider;