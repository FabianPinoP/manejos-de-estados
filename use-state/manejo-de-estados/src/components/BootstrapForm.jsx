import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Swal from "sweetalert2";
const BootstrapForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);

  const setData = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      Swal.fire({
        title: "Error!",
        text: "error debe ingresar todos los datos",
        icon: "error",
        showConfirmButton : false,
      });
      return;
    }
    Swal.fire({
      title: "Success!",
      text: "datos ingresados con exito",
      icon: "success",
      confirmButtonText: "Aceptar",
      showConfirmButton : true,
    });
    setError(false);
  };
  return (
    <div>
      {error ? <p>Complete los campos</p> : null}
      <Form onSubmit={setData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onChange={(e) => setCheck(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <h1>{email}</h1>
      <h1>{password}</h1>
      <h1>{check ? "true" : "false"}</h1>
    </div>
  );
};

export default BootstrapForm;
