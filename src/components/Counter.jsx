import { useState } from "react";

// Imutabilidade preve que ela nunca tera seu valor alterado
// Ao inves de trocar seu valor ele recebe um novo
// Não podemos alterar ela diretamente e sim dar um novo valor

/**
 * usuario = ['a', 'b', 'c']
 * 
 * newUser = [...usuarios, 'rafael']
 */

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(() => counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
