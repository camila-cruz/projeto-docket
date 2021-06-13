import React from 'react';
import EmptySpace from '../../components/commons/EmptySpace';
import InfoCard from '../../components/commons/InfoCard';
import Container from '../../components/foundation/Container'
import FormDocument from '../../components/patterns/FormDocument';

export default function Home() {
  return (
    <div className="Home">
      <Container>
        <InfoCard />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormDocument />
          <EmptySpace />
        </div>
      </Container>
    </div>
  );
}
