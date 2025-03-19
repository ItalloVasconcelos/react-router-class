import React from 'react';
import {useParams} from "react-router-dom";

const Params = () => {
    const {id} = useParams();
    return (
        <div className="Params">
            <h1>Params</h1>
            <h2>Valor {id}</h2>
        </div>
    )
}

export default Params