import React,{useContext, useEffect, useState} from 'react';
import {ModalContext} from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
const Receta = ({receta}) => {
    //configuracion del modeal
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handelOpen = () => {
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    //extraer los valores del context
    const {informacion, guardarIdReceta, guardarReceta} = useContext(ModalContext);
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
                <div className="card-body">
                    <button
                        type="button"
                        className="bt btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink)
                            handelOpen();
                        }}
                    >
                        Ver Receta
                    </button>
                    <Modal
                        open={open}
                        onClose={() =>{
                            guardarIdReceta(null);
                            guardarReceta({});
                            handleClose();
                        }}
                    >
                        <div className={classes.paper} style={modalStyle}>
                            <h2>{informacion.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {informacion.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={informacion.strDrinkThumb} alt={informacion.strDrink}/>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;
