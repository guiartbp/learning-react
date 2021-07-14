import React from 'react';
import Head from './Head';
import Row from './Row';
const Table = ({ dados }) => {
  const keys = Object.keys(dados[0]);
  return (
    <table>
      <Head keys={keys} />
      <tbody>
        {dados.map((record) => (
          <Row record={record} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
