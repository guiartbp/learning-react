import React from 'react';
import PageName from '../../components/PageName/PageName';
import Tables from '../../components/Table/Tables';
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
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
    {
      id: 8,
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
  ];
  return (
    <>
      <PageName name="Clientes" />
      <Tables dados={dados} />
    </>
  );
};
export default Clientes;
