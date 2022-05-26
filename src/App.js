import React  from 'react';
import styled from 'styled-components';
import Formulario from './componentes/Formulario';


const App = () =>
{
    return (
        <Contenedor>
            <Titulo>Lista de Contactos</Titulo>
            <Formulario></Formulario>
        </Contenedor>
    )
}

export default App;

const Contenedor = styled.div`
    margin: 40px;
    width: 90%;
    max-width: 400px;
    background: #fff;    
    padding: 40px;
    border-radius: 5p;
    text-align: center;
`;

const Titulo = styled.h2`
    margin-bottom: 10px;

`;

