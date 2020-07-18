import React, {Fragment}from 'react'
import { Link } from "react-router-dom";

const Buttons = () => {

    return (
        <Fragment>
            
            <Link to="/cocina" id="cookButtonContainer">
                <button id="cookButton">Cocinero</button>
            
            </Link>
            <Link to="/mesero" id="waiterButtonContainer">
                <button id="waiterButton"> Mesero</button>
            </Link>
        </Fragment>

    )
}

export default Buttons


