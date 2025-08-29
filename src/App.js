//criação do elemento Square que irá compor o jogo da velha

import './App.css';

export default function Square() {
  return (
    <div>
    <div>
    <button classname="square">1</button>
    <button classname="square">2</button>
    <button classname="square">3</button>
    </div>
    <div>
    <button classname="square">4</button>
    <button classname="square">5</button>
    <button classname="square">6</button>
    </div>
    <div>
    <button classname="square">7</button>
    <button classname="square">8</button>
    <button classname="square">9</button>
    </div>
  </div> 
  )
}