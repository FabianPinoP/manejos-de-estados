// paso 1 - importar useState

import { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";

import MyInput from "./components/MyInput";
import BootstrapForm from "./components/BootstrapForm";
import Formulario from "./components/Formulario";

function App() {
  // paso 2 - crear el estado y la funcion que lo modifica con useState y asignarle un valor inicial
  const [count, setCount] = useState(0);
  const [counterBytwo, setCounterBytwo] = useState(0);

  return (
    <>
      <h1>Contador: {count}</h1>
      {/* paso 3 - usar la funcion que modifica el estado */}
      <Button onClick={() => setCount(count + 1)}>Aumentar</Button>
      {/* paso 4 - usar el estado y ver en react tools los cambios */}

      {/* ejercicio contador por 2 */}
      <h1>Contador: {counterBytwo}</h1>
      <Button onClick={() => setCounterBytwo(counterBytwo + 2)}>
        Aumentar por 2
      </Button>

      {/* trabajando con inputs ejemplo */}
      <h1>Formulario</h1>
      <MyInput />

      {/* formulario de Bootstra */}
      <BootstrapForm />
      <Formulario />
    </>
  );
}

export default App;
