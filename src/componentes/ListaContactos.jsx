import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import db from "../firebase/firebaseConfig.js";
import { collection, onSnapshot } from 'firebase/firestore';
import Contacto from "./Contacto";

//sfc    snippet
const ListaContactos = () => {
    
    const [contactos, cambiarContactos] = useState([]);

    useEffect(() => {
        //mantiene una conexión abierta con firebase, y cuando hay cambios
        //ejecuta la función que le pasamos como segundo parámetro
        onSnapshot(
            collection(db, 'usuarios'),
            (snapshot) => {
                console.log('se ejecuta snapShot porque hay un cambio en la base de datos');
                console.log(snapshot.docs);
                //mapeamos en un nuevo array lo que nos devuelve el snapshot
                const arrayUsers = snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                })
                console.log(arrayUsers);
                cambiarContactos(arrayUsers);
            },
            (error) => {
                console.log(error);
            }
        )
    }, []);

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