import { Container, Row } from "react-bootstrap";
import Noticia from "./Noticia";


const ListaNoticias = () => {
    return (
        <Container>
            <Row>
                <Noticia></Noticia>
            </Row>
        </Container>
    );
};

export default ListaNoticias;