import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "error debe ingresar todos los datos",
        icon: "error",
        showConfirmButton : false,
      });
      setError(true);
      return
    }
    console.log(nombre);
    setError(false);
    return
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
    {error ? <p>El campo no puede estar vacio</p> : null}
        <label>First name:</label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} />
        <button type="submit" value="Submit">
          submit
        </button>
      </form>
    </>
  );
};

export default Formulario;
