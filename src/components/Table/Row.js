import React from 'react';

const Row = ({ record }) => {
  const keys = Object.keys(record);
  return (
    <tr key={record.id}>
      {keys.map((key) => (
        <td key={key}> {record[key]}</td>
      ))}
    </tr>
  );
};

export default Row;
