import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Titulo from "./Titulo";
import ListaNoticias from "./ListaNoticias";
const Formulario = () => {
  return (
    <section className="main">
      <Titulo></Titulo>
      <Container className="p-5 contenedor">
        <article className="my-5">
          <Row >
            <Col xs={4}>
              <p className="fs-4">Buscar por categorias:</p>
            </Col>
            <Col xs={8}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <hr className="my-5"/>
        </article>
        <ListaNoticias></ListaNoticias>
      </Container>
    </section>
  );
};

export default Formulario;
