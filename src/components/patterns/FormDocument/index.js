import React from 'react';
import TextField from '../../commons/TextField';
import Box from '../../foundation/Box';
import Text from '../../foundation/Text';
import './index.scss';

export default function FormDocument() {
  return (
    <Box className="FormDocument">
      <Text tag="h4">
        Adicionar documentos ao pedido
      </Text>
      <Text tag="label">Nome do documento: *</Text>
      <TextField type="text" placeholder="Digite aqui" />
      <Text tag="label">Tipo de pessoa: *</Text>
      <TextField type="text" placeholder="Digite aqui" />
      <Text tag="label">CPF *</Text>
      <TextField type="text" placeholder="Digite aqui" />
      <Text tag="label">Nome completo: *</Text>
      <TextField type="text" placeholder="Digite aqui" />
      
      <Text tag="h6">Dados do cartório</Text>

      <Text tag="label">CEP: *</Text>
      <TextField type="text" placeholder="Digite aqui" />

      <div>
        <div>
          <Text tag="label">Rua: *</Text>
          <TextField type="text" placeholder="Digite aqui" />
        </div>
        <div>
          <Text tag="label">Número: *</Text>
          <TextField type="text" placeholder="Digite aqui" />
        </div>
      </div>

      <div>
        <div>
          <Text tag="label">Cidade: *</Text>
          <TextField type="text" placeholder="Digite aqui" />
        </div>
        <div>
          <Text tag="label">UF: *</Text>
          <TextField type="text" placeholder="Digite aqui" />
        </div>
      </div>
      
    </Box>
  )
}
