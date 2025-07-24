import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { bookStructure } from '../data/bookStructure';
import { Card, Button } from '../styles/GlobalStyles';
import TelomereSimulation from '../components/TelomereSimulation';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 80px 0;
  background: ${props => props.theme.gradientBlue};
  border-radius: 0;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1" fill-rule="nonzero"><circle cx="30" cy="30" r="2"/></g></g></svg>');
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  font-size: 1.3rem;
  margin-bottom: 30px;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Quote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 30px auto;
  line-height: 1.6;
  position: relative;
  padding: 0 40px;
  z-index: 1;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);

  &::before,
  &::after {
    content: '"';
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.7);
    position: absolute;
  }

  &::before {
    left: 0;
    top: -10px;
  }

  &::after {
    right: 0;
    bottom: -30px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 20px;
  }
`;

const VolumeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const VolumeCard = styled(Card)`
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid ${props => props.theme.secondary};

  &:hover {
    transform: translateY(-5px);
    border-left-color: ${props => props.theme.accent};
  }
`;

const VolumeTitle = styled.h3`
  color: ${props => props.theme.secondary};
  margin-bottom: 15px;
  font-size: 1.3rem;
`;

const VolumeDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ChapterCount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${props => props.theme.text};
  font-size: 0.9rem;
  font-weight: 500;
`;

const Badge = styled.span`
  background: ${props => props.theme.secondary};
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
`;

const IntroSection = styled.div`
  text-align: center;
  margin: 60px 0;
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.textSecondary};
  max-width: 800px;
  margin: 0 auto 30px auto;
`;

const HighlightBox = styled(Card)`
  background: linear-gradient(135deg, ${props => props.theme.accent}10, ${props => props.theme.secondary}10);
  border: 2px solid ${props => props.theme.accent}30;
  text-align: center;
  margin: 40px 0;
`;

const HighlightTitle = styled.h3`
  color: ${props => props.theme.accent};
  margin-bottom: 15px;
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 40px 0;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: ${props => props.theme.surface};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.border};
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  min-width: 50px;
`;

const FeatureText = styled.div`
  h4 {
    color: ${props => props.theme.text};
    margin-bottom: 5px;
    font-size: 1rem;
  }

  p {
    color: ${props => props.theme.textSecondary};
    font-size: 0.9rem;
    margin: 0;
  }
`;

const Homepage = ({ onVolumeSelect }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <HomeContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <HeroSection>
            <Title>Código da Vida</Title>
            <Subtitle>Enciclopédia Interativa para Reprogramar o Envelhecimento Humano</Subtitle>
            
            <Quote>
              {bookStructure.openingQuote}
            </Quote>
          </HeroSection>
        </motion.div>

        <motion.div variants={itemVariants}>
          <IntroSection>
            <IntroText>
              Bem-vindo à mais completa enciclopédia científica sobre o envelhecimento humano e suas 
              possibilidades de intervenção. Esta plataforma interativa combina rigor científico com 
              tecnologia avançada para oferecer uma experiência única de aprendizado.
            </IntroText>
            
            <IntroText>
              Explore simulações científicas, calcule sua idade biológica, descubra protocolos 
              práticos e mergulhe nas questões éticas e filosóficas que envolvem o prolongamento 
              da vida humana.
            </IntroText>
          </IntroSection>
        </motion.div>

        <motion.div variants={itemVariants}>
          <HighlightBox>
            <HighlightTitle>🧬 Simulação Interativa Destacada</HighlightTitle>
            <p>Explore nossa simulação da dinâmica dos telômeros e descubra como diferentes fatores influenciam o envelhecimento celular.</p>
          </HighlightBox>
        </motion.div>

        <motion.div variants={itemVariants}>
          <TelomereSimulation />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 style={{ textAlign: 'center', margin: '60px 0 40px 0' }}>
            Funcionalidades Interativas
          </h2>
          
          <FeatureList>
            <FeatureItem>
              <FeatureIcon>🧪</FeatureIcon>
              <FeatureText>
                <h4>Simulações Científicas</h4>
                <p>Visualize processos celulares complexos através de animações interativas baseadas em dados reais.</p>
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureText>
                <h4>Calculadora de Idade Biológica</h4>
                <p>Descubra sua idade biológica real com base em biomarcadores e estilo de vida.</p>
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureText>
                <h4>Protocolos Personalizados</h4>
                <p>Acesse estratégias práticas e evidências científicas para otimizar sua longevidade.</p>
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>⚖️</FeatureIcon>
              <FeatureText>
                <h4>Debate Ético</h4>
                <p>Participe de discussões sobre as implicações morais e legais do prolongamento da vida.</p>
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>🧠</FeatureIcon>
              <FeatureText>
                <h4>Quiz Interativo</h4>
                <p>Teste seus conhecimentos e receba feedback personalizado sobre os temas estudados.</p>
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>📚</FeatureIcon>
              <FeatureText>
                <h4>Referências Científicas</h4>
                <p>Acesse links diretos para estudos científicos e mantenha-se atualizado com as descobertas.</p>
              </FeatureText>
            </FeatureItem>
          </FeatureList>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 style={{ textAlign: 'center', margin: '60px 0 40px 0' }}>
            Explore os Volumes
          </h2>
          
          <VolumeGrid>
            {bookStructure.volumes.map((volume, index) => (
              <motion.div
                key={volume.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <VolumeCard onClick={() => onVolumeSelect(volume.id)}>
                  <VolumeTitle>{volume.title}</VolumeTitle>
                  <VolumeDescription>{volume.description}</VolumeDescription>
                  <ChapterCount>
                    📖 {volume.chapters.length} capítulos
                    <Badge>Volume {index + 1}</Badge>
                  </ChapterCount>
                </VolumeCard>
              </motion.div>
            ))}
          </VolumeGrid>
        </motion.div>

        <motion.div variants={itemVariants}>
          <IntroSection>
            <h3>Baseado em Evidências Científicas</h3>
            <IntroText>
              Todo o conteúdo desta enciclopédia é fundamentado em pesquisas científicas rigorosamente 
              revisadas, com mais de 1.000 referências de periódicos de alto impacto. Nosso compromisso 
              é com a precisão científica e a aplicabilidade prática das informações apresentadas.
            </IntroText>
          </IntroSection>
        </motion.div>
      </motion.div>
    </HomeContainer>
  );
};

export default Homepage;
