import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <div>
        <Link to="/query">QUERY</Link>
      </div>
      <div>
        <Link to="/fundamento">FUNDAMENTO</Link>
      </div>
    </Container>
  );
}
