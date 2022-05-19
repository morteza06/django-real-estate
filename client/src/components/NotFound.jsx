import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaHeartBoroken,FaSadTear } from 'react-icons/fa';

const NotFound = () => {
  return (
      <Container>
          <Row>
              <Col className="text-center">
                <h1 className="notfound">404 Not Found</h1>
                <FaHeartBoroken className="broken-heart"/>
                <FaSadTear className="sad-tear"/>
              </Col>
          </Row>
      </Container>
  )
}

export default NotFound