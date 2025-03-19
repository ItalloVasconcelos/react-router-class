import React from 'react';
import {Link} from "react-router-dom";


const NotFound = () => {
    return (
        <div className="NotFound">
            <h1>Error: 404</h1>
            <p>Você perdeu algo aqui? Procure voltar para a página de home: <Link to='/'>Home!</Link></p>
        </div>
    )
}

export default NotFound