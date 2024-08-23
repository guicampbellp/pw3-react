import React from 'react';
import Multiplicar from './multiplicar';
import Subtrair from './subtrair';

function Dividir() {
    const a = 10;
    const b = 20;
    const resultado = b !== 0 ? a / b : 'Divisão por zero!';

    return (
        <>
            <Multiplicar />
            <div><b>Dividir:</b> {a} / {b} = {resultado}</div>
        </>
    );
}

export default Dividir;
