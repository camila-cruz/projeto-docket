import React from 'react';
import Box from '../../foundation/Box';
import Text from '../../foundation/Text';
import './index.scss';

export default function InfoCard() {
  return (
    <Box className="InfoCard">
      <Text tag="h4">
        Lead: Documento para criar contrato
      </Text>
      <Text tag="p">
        <b>Observação: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, suscipit pariatur quod ab nostrum fugit? Tenetur, in esse. Libero nam iure aperiam repellat eius neque ducimus laboriosam dolorem minus vel ab expedita voluptatum harum nesciunt, veritatis pariatur delectus accusantium nisi odio eligendi! Dolorum minus ad corporis ipsum ullam!
      </Text>
      <div>
        <Text>
          <b>Criado por: </b> João da Silva
        </Text>
        <Text>
          <b>Data de criação: </b> 11 de maio de 2021
        </Text>
      </div>
    </Box>
  )
}
