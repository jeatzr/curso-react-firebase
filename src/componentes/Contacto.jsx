import React, {useState} from "react";
import styled from 'styled-components';
import db from "./../firebase/firebaseConfig.js";

const Contacto = ({ id, nombre, correo }) => {
    
    const [editandoTarea, setEditandoTarea] = useState(false);

    return (  
        <ContenedorContacto>
            {editandoTarea ?
                <form action="">
                    <Input
                        type="text"
                        name="nombre"
                        //value={ }
                        //onChange={}
                        placeholder="Nombre"
                    />
                    <Input
                        type="text"
                        name="correo"
                        //value={ }
                        //onChange={}
                        placeholder="Correo"
                    />
                    <Boton type="submit">Actualizar</Boton>
                </form>
                : 
                <>
                    <Nombre>{nombre}</Nombre>
                    <Correo>{correo}</Correo>
                    <Boton>Eliminar</Boton>
                    <Boton onClick={()=> setEditandoTarea(!editandoTarea)}>Editar</Boton>
                </>     
            }
        </ContenedorContacto>
    );
}

const ContenedorContacto = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,.0);
`;

const Nombre = styled.p`
    font-weight: bold;
`;

const Correo = styled.p`
    font-style: italic;
    color: #6B6B6B;
    margin: 5px 0;
`;

const Boton = styled.button`
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    margin: 0px 2px;
    margin-bottom: 10px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #FFF;
    font-size: 12px;

    &:hover {
        background: #3076e9;

    }

`;

const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2 ease all;
    outline: none;
    text-align: center;

    &:focus {
        border: 2px solid #3076e9;
    }
`;
 
export default Contacto;

