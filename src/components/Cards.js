import styles from '../styles/Cards.module.css';
import { ListGroup, ListGroupItem, Card } from 'react-bootstrap';
import react, { useState } from 'react';

export default function Cards({ title, price, description, picture, id, setId }) {

    const [show, setShow] = useState(true);

    return (
        <Card className={styles.card} id="card" style={show === true ? { display: 'flex' } : { display: 'none' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>R$ {price}</b></ListGroupItem>
            </ListGroup>
            <ListGroup className='list-group-flush'>
                <button onClick={() => { { setId(id); setShow(false) } }} style={{ background: 'white', outline: 'none', border: 'none' }}>
                    Deletar
                </button>
            </ListGroup>
        </Card >
    )
}