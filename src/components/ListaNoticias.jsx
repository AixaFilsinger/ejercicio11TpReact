import { Container, Row } from "react-bootstrap";
import Noticia from "./Noticia";


const ListaNoticias = ({noticias}) => {
    return (
        <Container>
            <Row>
              { noticias.map((noticia, indice)=>( <Noticia key={indice} noticias={noticia}></Noticia>)) }
            </Row>
        </Container>
    );
};

export default ListaNoticias;