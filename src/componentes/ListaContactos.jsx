import React, {useState} from "react";
import styled from 'styled-components';
import db from "../firebase/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

//sfc    snippet
const ListaContactos = () => {
    const [contactos, cambiarContactos] = useState([
        { id:2, nombre: 'Carlos', correo: 'correo@movidas.com'}
    ])

    return (  
        
        contactos.length &&
        <ContenedorContactos>
            {contactos.map((c) => {
                return <p key={c.id}>{c.nombre} - {c.correo}</p>
            })}
        </ContenedorContactos>
    );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;
 
export default ListaContactos;