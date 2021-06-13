import React from 'react';
import TextField from '../../commons/TextField';
import Box from '../../foundation/Box';
import Text from '../../foundation/Text';
import './index.scss';

function FormGroup({ children, obrigatory }) {
  return (
    <div className={`FormGroup ${obrigatory ? 'obrigatory' : '' }`}>
      {children}
    </div>
  )
}

function FormSection({ children }) {
  return (
    <div className="FormSection">
      {children}
    </div>
  )
}

export default function FormDocument() {
  return (
    <Box className="FormDocument">
      <Text tag="h4">
        Adicionar documentos ao pedido
      </Text>

      <form>
        <FormGroup obrigatory>
          <Text tag="label">Nome do documento: </Text>
          <TextField type="text" placeholder="Digite aqui" />
        </FormGroup>

        <FormGroup obrigatory>
          <Text tag="label">Tipo de pessoa: </Text>
          <TextField type="text" placeholder="Digite aqui" />
        </FormGroup>

        <FormGroup obrigatory>
          <Text tag="label">CPF </Text>
          <TextField type="text" placeholder="Digite aqui" />
        </FormGroup>

        <FormGroup obrigatory>
          <Text tag="label">Nome completo: </Text>
          <TextField type="text" placeholder="Digite aqui" />
        </FormGroup>
        
        <Text tag="h4" className="subtitle">Dados do cartório</Text>

        <FormGroup obrigatory>
          <Text tag="label">CEP: </Text>
          <TextField type="text" placeholder="Digite aqui" />
        </FormGroup>

        <FormSection>
          <FormGroup obrigatory>
            <Text tag="label">Rua: </Text>
            <TextField type="text" placeholder="Digite aqui" />
          </FormGroup>
          <FormGroup obrigatory>
            <Text tag="label">Número: </Text>
            <TextField type="text" placeholder="Digite aqui" />
          </FormGroup>
        </FormSection>

        <FormSection>
          <FormGroup obrigatory>
            <Text tag="label">Cidade: </Text>
            <TextField type="text" placeholder="Digite aqui" />
          </FormGroup>
          <FormGroup obrigatory>
            <Text tag="label">UF: </Text>
            <TextField type="text" placeholder="Digite aqui" />
          </FormGroup>
        </FormSection>
      </form>
    </Box>
  )
}
