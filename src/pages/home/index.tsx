import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';
import { Container, Content, Info } from './styles';

//animação
const apperFromCenter = keyframes`
 from{
   opacity: 0;
   transform: translateX(50px);
 }
 to{
   opacity: 1;
   transform: translateX(0px);
 }
`;

export const AnimationContainer = styled.div`
  display: flex;  
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
  animation: ${apperFromCenter} 1s; //executando animação

  -webkit-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
   box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);

;
`;

const ConteudoUm = () => {
    return <h3>Experiência obtida através de cursos e projetos pessoais.</h3>
}
const ConteudoDois = () => {
    return (
        <AnimationContainer>
            <div className="resume">
                <h3>Estudante bootcamp/Gostack (Rocketseat) - Desenvolvedor full-stack</h3>
                <span>Desenvolvendo aplicações em Java script, React, React-native e nodeJS</span>
                <p>
                    No bootcamp/Gostack é uma forma de ganhar experiência através do curso onde construímos um projeto do zero ao
                    deploy com as tecnologias ReactJS, React-Native, NodeJS e etc... Aprendemos na pratica a construir projetos reais.
             </p>
            </div>
        </AnimationContainer>
    )
}


const Home: React.FC = () => {
    const [togleConteudos, setTogleConteudos] = useState(false);

    const handleTogle = () => {
        // setTogleConteudos(prev => !prev);
        setTogleConteudos(!togleConteudos);
    }

    return (
        <PageDefault>
            <Container>
                <Content>

                    <img src="https://avatars2.githubusercontent.com/u/41512408?s=460&u=079b45ace61cd43ec5cb1b230e070375b4d2d382&v=4" alt="Wesley Guerra" />
                    <h1 className="typing-animation">Wesley Guerra Hi there 👋</h1>
                    <Info>
                        <p>Software Developer, currently focusing on NodeJS, ReactJS and React Native.</p>
                        <span>Let's code 🚀</span>

                        <h3>💻 Currently studying Technologies</h3>
                        <ul>
                            <li>Nodejs</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>TypeScript</li>
                            <li>Docker</li>
                            <li>MySQL</li>
                        </ul>
                    </Info>
                    <Button type="button" onClick={handleTogle}>Resumo Profissional</Button>
                    {togleConteudos ? <ConteudoDois /> : <ConteudoUm />}
                </Content>
            </Container>
        </PageDefault>
    )
}

export default Home
