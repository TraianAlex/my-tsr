import React from 'react';
import { Container } from 'react-bootstrap';
import { useTypeWritting } from '../utils/hooks/useTypeWritting';

const words = [
  'Web Development',
  'React',
  'Typescript',
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
];

export const Home = () => {
  const text = useTypeWritting(words);
  return (
    <Container>
      <h3>{text}</h3>
    </Container>
  );
};
