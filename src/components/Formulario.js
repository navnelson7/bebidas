import React from 'react';
const Formulario = () => {
    return (
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por caegorias</legend>
            </fieldset>
            <div className="row">
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