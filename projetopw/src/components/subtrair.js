import React from 'react';
import Somar from './somar';

function Subtrair() {
    const a = 10;
    const b = 20;
    const resultado = a - b;

    return (
        <>
            <Somar />
            <div><b>Subtrair:</b> {a} - {b} = {resultado}</div>
        </>
    );
}


export default Subtrair;
