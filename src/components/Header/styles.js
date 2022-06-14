import styled from 'styled-components';

export const Container = styled.div`
  
  // background-image: linear-gradient(180deg, rgba(238,238,238,1) 0%, rgba(204,204,204,1) 70%, rgba(142,142,142,1) 90%, rgba(120,120,120,1) 100%);
  
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: BabyBlue;
    font-size: 90px;
    color:#242424;
  }

  img {
    margin-top: 20px;
    height: 640px;
    animation: moving 3s ease 1s infinite normal both;
  }

  @keyframes moving {
	0% {
		transform: translate(0);
	}

	20% {
		transform: translate(-4px, 4px);
	}

	40% {
		transform: translate(-4px, -4px);
	}

	60% {
		transform: translate(4px, 4px);
	}

	80% {
		transform: translate(4px, -4px);
	}

	100% {
		transform: translate(0);
	}
}

`;