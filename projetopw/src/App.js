import React from 'react';
import './App.css';
import Dividir from './components/dividir';
import Dupla from './components/dupla';


function App() {
  return (
    <div className="tudo">
      <div className="caixa">
        <h1>Resultados</h1>
        <div className="operacoes">
          <Dividir />
        </div>
        <div className="resultado">
          <Dupla nome="Guilherme Penna"  nome2="Gabriela Pedroso" />
        </div>
      </div>
  </div>
  );
}

export default App;