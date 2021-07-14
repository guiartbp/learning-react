import React from 'react';

const Head = ({ keys }) => {
  return (
    <thead>
      <tr>
        {keys.map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Head;
