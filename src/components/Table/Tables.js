import React from 'react';
import Head from './Head';
import Row from './Row';

import { Table } from 'reactstrap';

const Tables = ({ dados }) => {
  const keys = Object.keys(dados[0]);
  return (
    <Table striped>
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
