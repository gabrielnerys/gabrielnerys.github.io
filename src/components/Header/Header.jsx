import React from 'react';
import headCloud from '../../images/headCloud.png';
import { Container } from './styles';


const Home = () => {
  return (
    <>
    <Container>
      <header>
        <h1> Hi, </h1>
      </header>
      <section>
        <div>
          <img src={ headCloud } alt="head in cloud" />
        </div>
      </section>
      <section>
        <div>
          <h1>I'm Gabe!</h1>
        </div>
      </section>
    </Container>
    </>
  );
}

export default Home;
