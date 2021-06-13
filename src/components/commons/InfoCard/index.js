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
        <strong>Observação: </strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, suscipit pariatur quod ab nostrum fugit? Tenetur, in esse. Libero nam iure aperiam repellat eius neque ducimus laboriosam dolorem minus vel ab expedita voluptatum harum nesciunt, veritatis pariatur delectus accusantium nisi odio eligendi! Dolorum minus ad corporis ipsum ullam!
      </Text>
      <div className="infoData">
        <Text tag="span">
          <strong>Criado por: </strong> João da Silva
        </Text>
        <Text tag="span">
          <strong>Data de criação: </strong> 11 de maio de 2021
        </Text>
      </div>
    </Box>
  )
}
