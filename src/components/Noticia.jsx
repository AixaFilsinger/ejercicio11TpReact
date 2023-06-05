import { Col, Card, Button } from "react-bootstrap";

const Noticia = ({noticias}) => {
  return (
    <>
    <Col md={4} className="mb-3">
      <Card>
        <Card.Img variant="top" src={noticias.image_url} />
        <Card.Body>
          <Card.Title>{noticias.title}</Card.Title>
          <Card.Text>
           {noticias.description}
          </Card.Text>
          <Button variant="primary">ver</Button>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
};


export default Noticia;
