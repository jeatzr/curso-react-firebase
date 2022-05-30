import React, {useState} from "react";
import styled from 'styled-components';
import db from "../firebase/firebaseConfig.js";
import Contacto from "./Contacto.jsx";

//sfc    snippet
const ListaContactos = () => {
    const [contactos, cambiarContactos] = useState([
        { id:1, nombre: 'Carlos', correo: 'correo@movidas.com'},
        { id:2, nombre: 'Manolo', correo: 'correo2@movidas.com'},
    ])

    return (  
        
        //esto pregunta si hay contactos para mostrar el contenedor de contactos
        contactos.length &&
        <ContenedorContactos>
                {contactos.map((c) =>
                    <Contacto
                        key={c.id}
                        id={c.id}
                        nombre={c.nombre}
                        correo={c.correo}
                    />
                )}
        </ContenedorContactos>
    );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;
 
export default ListaContactos;