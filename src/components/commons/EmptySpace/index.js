import React from 'react';
import './index.scss';
import Box from '../../foundation/Box';
import Text from '../../foundation/Text';

export default function EmptySpace() {
  return (
    <Box className="EmptySpace">
      <Text tag="span">
        Nenhum documento criado
      </Text>
    </Box>
  )
}
