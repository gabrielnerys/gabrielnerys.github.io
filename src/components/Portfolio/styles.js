import styled from 'styled-components';

export const ContainerLeft = styled.section`
  
  background-color: rgba(30,30,30,1);
  background-size: auto;
  
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 250px;
  }

  img:hover{
    animation: scaleUp 0.5s ease 0s 1 normal forwards;
  }

  div {
    margin: 30px;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    color:lightgray;
    margin: 10px 0;
  }
    
  p {
    color: white;
    max-width: 600px;
  }

  @keyframes scaleUp {
  	0% {
		transform: scale(1);
	  }

  	100% {
	  	transform: scale(1.1);
	  }
  }
`;

export const ContainerRight = styled.section`
  
  background-color: rgba(30,30,30,1);
  background-size: auto;
  
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 250px;
  }

  img:hover{
    animation: scaleUp 0.5s ease 0s 1 normal forwards;
  }

  div {
    margin: 30px;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    color:lightgray;
    margin: 10px 0;
  }
    
  p {
    color: white;
    max-width: 600px;
  }

  @keyframes scaleUp {
  	0% {
		transform: scale(1);
	  }

  	100% {
	  	transform: scale(1.1);
	  }
  }
`;