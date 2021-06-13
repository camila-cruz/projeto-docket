import React from 'react';
import InfoCard from '../../components/commons/InfoCard';
import Container from '../../components/foundation/Container'
import FormDocument from '../../components/patterns/FormDocument';

export default function Home() {
  return (
    <div className="Home">
      <Container>
        <InfoCard />
        <FormDocument />
      </Container>
    </div>
  );
}
