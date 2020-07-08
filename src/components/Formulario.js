import React,{useContext} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
const Formulario = () => {
     const {categorias} = useContext(CategoriasContext);
    return (
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por caegorias</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option>-- Selecciona Categoria</option>
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
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;