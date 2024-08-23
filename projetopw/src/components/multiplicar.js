import React from 'react';
import Subtrair from './subtrair';

function Multiplicar() {
    const a = 10;
    const b = 20;
    const resultado = a * b;
    return (
        <>
            <Subtrair />
            <div><b>Multiplicar:</b> {a} * {b} = {resultado}</div>
        </>
    );
}

export default Multiplicar;
