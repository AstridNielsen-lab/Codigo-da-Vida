import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const SplashContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  color: white;
  text-align: center;
  transition: opacity 0.5s ease-out;
  opacity: ${props => props.isVisible ? 1 : 0};
`;

const Logo = styled.div`
  animation: ${fadeIn} 1s ease-out;
  margin-bottom: 2rem;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  animation: ${fadeIn} 1s ease-out 0.3s both;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0 0 3rem 0;
  animation: ${fadeIn} 1s ease-out 0.6s both;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const DeveloperInfo = styled.div`
  animation: ${fadeIn} 1s ease-out 0.9s both;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 500px;
`;

const DeveloperName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #ffffff;
`;

const CompanyInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const CompanyName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #f0f0f0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #e0e0e0;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ContactLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
`;

const LoadingBar = styled.div`
  width: 300px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-top: 2rem;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-out 1.2s both;
`;

const LoadingProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ffd700, #ffffff);
  border-radius: 2px;
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular progresso de carregamento
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Aguardar um pouco antes de ocultar
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onComplete();
            }, 500);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible && progress === 100) {
    return null;
  }

  return (
    <SplashContainer isVisible={isVisible}>
      <Logo>
        <MainTitle>Código da Vida</MainTitle>
        <Subtitle>Enciclopédia Interativa para Reprogramar o Envelhecimento</Subtitle>
      </Logo>

      <DeveloperInfo>
        <DeveloperName>Desenvolvido por Julio Campos Machado</DeveloperName>
        
        <CompanyInfo>
          <CompanyName>Like Look Solutions</CompanyName>
        </CompanyInfo>

        <ContactInfo>
          <ContactItem>
            <span>📱 WhatsApp:</span>
            <ContactLink href="https://wa.me/5511970603441" target="_blank" rel="noopener noreferrer">
              +55 11 97060-3441
            </ContactLink>
          </ContactItem>
          
          <ContactItem>
            <span>🌐 Website:</span>
            <ContactLink href="https://likelook.wixsite.com/solutions" target="_blank" rel="noopener noreferrer">
              Like Look Solutions
            </ContactLink>
          </ContactItem>
          
          <ContactItem>
            <span>📧 Email:</span>
            <ContactLink href="mailto:juliocamposmachado@gmail.com">
              juliocamposmachado@gmail.com
            </ContactLink>
          </ContactItem>
        </ContactInfo>

        <LoadingBar>
          <LoadingProgress progress={progress} />
        </LoadingBar>
      </DeveloperInfo>
    </SplashContainer>
  );
};

export default SplashScreen;
