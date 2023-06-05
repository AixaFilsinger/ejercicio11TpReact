import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Titulo from "./Titulo";
import ListaNoticias from "./ListaNoticias";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");

   useEffect(()=>{
    consultarApi();
    setNoticias([])
   }, [categoria])

  const consultarApi = async () => {
    try {
      if (categoria !== "") {
        const respuesta = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_2400020ca6d60bf4c1a5ae89da6f19c3c1270&category=${categoria}`
        );
        const dato = await respuesta.json();
        setNoticias(...noticias, dato.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="main">
      <Titulo></Titulo>
      <Container className="p-5 contenedor">
        <article className="my-5">
          <Row>
            <Col xs={4}>
              <p className="fs-4">Buscar por categorias:</p>
            </Col>
            <Col xs={8}>
              <Form>
                <Form.Select
                aria-label="selec-categoria"
                onChange={(e) => setCategoria(e.target.value)}
                value={categoria}
              >
                <option>Categorias</option>
                <option value="">Categoria</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="environment">Medio Ambiente</option>
                <option value="food">Comida</option>
                <option value="health">Salud</option>
                <option value="politics">Politica</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnología</option>
                <option value="top">Destacadas</option>
                <option value="tourism">Turismo</option>
                <option value="world">Mundo</option>
              </Form.Select>
              </Form>
              
            </Col>
          </Row>
          <hr className="my-5" />
        </article>
        <ListaNoticias noticias={noticias}></ListaNoticias>
      </Container>
    </section>
  );
};

export default Formulario;
