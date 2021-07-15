import React from 'react';
import { Table } from 'react-bootstrap';
import Head from './Head';
import Row from './Row';

const Tables = ({ dados }) => {
  const keys = Object.keys(dados[0]);
  return (
    <Table striped bordered hover>
      <Head keys={keys} />
      <tbody>
        {dados.map((record) => (
          <Row record={record} />
        ))}
      </tbody>
    </Table>
  );
};

export default Tables;
