import React from 'react';
import Table from '../../components/Table/Table';
const Clientes = () => {
  const dados = [
    {
      id: 1,
      name: 'Guilherme',
      cpf: '123.456.789-10',
      income: 'R$2.000,00',
      credit: 'R$600,00',
      totalLimit: 'R$600.00',
      limitOn: 'R$600,00',
      solicitation: false,
      situation: null,
      fullRegistration: true,
    },
    {
      id: 2,
      name: 'Willian',
      cpf: '123.456.789-10',
      income: 'R$2.000,00',
      credit: 'R$600,00',
      totalLimit: 'R$600.00',
      limitOn: 'R$600,00',
      solicitation: true,
      situation: null,
      fullRegistration: true,
    },
    {
      id: 3,
      name: 'Jonas',
      cpf: '123.456.789-10',
      income: 'R$2.000,00',
      credit: 'R$600,00',
      totalLimit: 'R$600.00',
      limitOn: 'R$600,00',
      solicitation: false,
      situation: null,
      fullRegistration: false,
    },
  ];
  return (
    <>
      <Table dados={dados} />
    </>
  );
};
export default Clientes;
