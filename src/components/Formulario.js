import React,{useContext,useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';
const Formulario = () => {
    const [busqueda, guardarBusqueda] = useState({
        nombre: "",
        categoria: ''
    })
   
     const {categorias} = useContext(CategoriasContext);     
     const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);
     //funcion para leeer los contenidos 
     const obtenerDatosReceta = e => {
         guardarBusqueda({
             ...busqueda,
             [e.target.name] : e.target.value
         })
     }
    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por Tipo de Licor y categorías</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="ej. tequila"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option>-- Selecciona Categoría</option>
                        {categorias.map(categoria =>(
                            <option 
                                key={categoria.strCategory}
                                value={CategoriasContext.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        className="btn btn-block btn-primary"
                        value="Buscar Bebida"
                        type="submit"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;