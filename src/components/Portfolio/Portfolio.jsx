import React from 'react';
import SolarSystem from '../../images/SolarSystem.png';
import InterativeRating from '../../images/InterativeRating.png';
import { ContainerLeft, ContainerRight } from './styles';
import '../../App.css';



const Portfolio = () => {
  return (
    <>
    <ContainerLeft>
          <div>
            <a href="https://solar-system-mu.vercel.app/" target="_blank" rel='noreferrer'>
              <img src={ SolarSystem } alt="" />
            </a>
          </div>
          <div>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo veritatis dolore eum tenetur assumenda! Quia eius tempora temporibus eos delectus, necessitatibus ea molestias. Numquam quae perferendis non molestias quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae ipsum optio exercitationem? Deserunt, mollitia laudantium? Aliquam doloribus eius quae. Saepe odit itaque voluptatibus hic beatae, fuga in optio eius!</p>
          </div>
      </ContainerLeft>
      <ContainerRight>
          <div>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo veritatis dolore eum tenetur assumenda! Quia eius tempora temporibus eos delectus, necessitatibus ea molestias. Numquam quae perferendis non molestias quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae ipsum optio exercitationem? Deserunt, mollitia laudantium? Aliquam doloribus eius quae. Saepe odit itaque voluptatibus hic beatae, fuga in optio eius!</p>
          </div>
          <div>
            <a href="https://interactive-rating-component-henna.vercel.app/" target="_blank" rel='noreferrer'>
              <img src={ InterativeRating } alt="" />
            </a>
          </div>
      </ContainerRight>
      <ContainerLeft>
          <div>
            <a href="https://solar-system-mu.vercel.app/" target="_blank" rel='noreferrer'>
              <img src={ SolarSystem } alt="" />
            </a>
          </div>
          <div>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo veritatis dolore eum tenetur assumenda! Quia eius tempora temporibus eos delectus, necessitatibus ea molestias. Numquam quae perferendis non molestias quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae ipsum optio exercitationem? Deserunt, mollitia laudantium? Aliquam doloribus eius quae. Saepe odit itaque voluptatibus hic beatae, fuga in optio eius!</p>
          </div>
      </ContainerLeft>
    </>
  );
}

export default Portfolio;
