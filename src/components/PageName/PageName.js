import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const PageName = (props) => {
  return (
    <Container>
      <Row>
        <Col>{props.name}</Col>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/boots/" className="link">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{props.name}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};
export default PageName;
