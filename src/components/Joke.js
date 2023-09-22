import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Col, Container } from 'react-bootstrap';
import { CardSize, CardTextSize } from './styled/Joke';

const CHARS_IN_JOKE = 50;
const DOTS = '...';

const Joke = (props) => (
  <Col>
    <Container>
      <CardSize>
        <Card>
          <Card.Body>
            <Card.Title tag="h5">{props.joke.category}</Card.Title>
            <Card.Text>
              <CardTextSize>
                {props.joke.joke.slice(0, CHARS_IN_JOKE) + DOTS}
              </CardTextSize>
            </Card.Text>
            <Link to={`/joke/${props.joke.id}`}>
              <Button color="primary">Check</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardSize>
    </Container>
  </Col>
);

export default Joke;
