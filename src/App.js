//criação do elemento Square que irá compor o jogo da velha

import './App.css';

//componente Square
function Square({valor}) {
  return (
    <button classname="square">{valor}</button>
  )
}

export default function Tabuleiro() {
  return (
    <div>
      <div>
        <Square valor = "1" />
        <Square valor = "2" />
        <Square valor = "3" />
      </div>
      <div>
        <Square valor = "4" />
        <Square valor = "5" />
        <Square valor = "6" />
      </div>
      <div>
        <Square valor = "7" />
        <Square valor = "8" />
        <Square valor = "9" />
      </div>
    </div>
  )
}