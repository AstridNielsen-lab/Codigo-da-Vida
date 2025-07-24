import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { bookStructure } from '../data/bookStructure';
import { Card } from '../styles/GlobalStyles';
import TelomereSimulation from '../components/TelomereSimulation';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.backgroundAlt};
`;

const HeroSection = styled.div`
  background: ${props => props.theme.gradientBlue};
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

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

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const ChapterTitle = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ChapterSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
`;

const ContentSection = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MainContent = styled(Card)`
  padding: 3rem;
  background: ${props => props.theme.surface};
  border: none;
  box-shadow: 0 10px 40px ${props => props.theme.shadow};
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TopicCard = styled(Card)`
  padding: 1.5rem;
  cursor: pointer;
  border-left: 4px solid ${props => props.active ? props.theme.accent : 'transparent'};
  background: ${props => props.active ? props.theme.surfaceAlt : props.theme.surface};
  transition: all 0.3s ease;

  &:hover {
    border-left-color: ${props => props.theme.accent};
    transform: translateX(4px);
  }
`;

const TopicTitle = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const TopicDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
  margin: 0;
`;

const InteractiveSection = styled.div`
  background: ${props => props.theme.surface};
  border-radius: 20px;
  padding: 3rem;
  margin: 3rem 0;
  box-shadow: 0 20px 60px ${props => props.theme.shadow};
  border: 1px solid ${props => props.theme.border};
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.primary};
  text-align: center;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${props => props.theme.gradientBlue};
    border-radius: 2px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${props => props.theme.borderLight};
  border-radius: 3px;
  margin: 2rem 0;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: ${props => props.theme.gradientBlue};
  border-radius: 3px;
  transition: width 0.3s ease;
  width: ${props => props.progress}%;
`;

const KeyPoints = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const KeyPoint = styled(motion.div)`
  background: ${props => props.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
  border-left: 4px solid ${props => props.theme.accent};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.gradientBlue};
  }
`;

const KeyPointIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.gradientBlue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const ChapterPage = () => {
  const { chapterId } = useParams();
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);

  // Find chapter data
  const findChapter = () => {
    for (const volume of bookStructure.volumes) {
      const chapter = volume.chapters.find(ch => ch.id === chapterId);
      if (chapter) {
        return { chapter, volume };
      }
    }
    return null;
  };

  const chapterData = findChapter();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!chapterData) {
    return (
      <PageContainer>
        <ContentSection>
          <Card style={{ textAlign: 'center', padding: '4rem' }}>
            <h2>Capítulo não encontrado</h2>
            <p>O capítulo solicitado não existe ou ainda não foi implementado.</p>
          </Card>
        </ContentSection>
      </PageContainer>
    );
  }

  const { chapter, volume } = chapterData;

  const keyPointsData = [
    {
      icon: '🧬',
      title: 'Mecanismos Moleculares',
      description: 'Compreenda os processos fundamentais que governam o envelhecimento a nível celular e molecular.'
    },
    {
      icon: '🔬',
      title: 'Evidências Científicas',
      description: 'Baseado em mais de 500 estudos peer-reviewed dos principais journals científicos.'
    },
    {
      icon: '💡',
      title: 'Aplicações Práticas',
      description: 'Traduza o conhecimento científico em estratégias aplicáveis para otimizar sua longevidade.'
    },
    {
      icon: '📊',
      title: 'Dados e Métricas',
      description: 'Visualize dados complexos através de gráficos interativos e simulações científicas.'
    }
  ];

  return (
    <PageContainer>
      <ProgressBar>
        <ProgressFill progress={readingProgress} />
      </ProgressBar>

      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ChapterTitle>{chapter.title}</ChapterTitle>
            <ChapterSubtitle>{chapter.description}</ChapterSubtitle>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentGrid>
          <MainContent>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Visão Geral do Capítulo</h3>
              <p>
                Este capítulo explora {chapter.title.toLowerCase()}, abordando os aspectos mais 
                avançados e atuais da pesquisa científica sobre envelhecimento. Você encontrará 
                explicações detalhadas, simulações interativas e protocolos práticos baseados em evidências.
              </p>

              <h3>Objetivos de Aprendizagem</h3>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '2rem' }}>
                <li>Compreender os mecanismos moleculares fundamentais</li>
                <li>Analisar as últimas descobertas científicas</li>
                <li>Aplicar conhecimentos em protocolos práticos</li>
                <li>Interpretar dados e estudos científicos</li>
              </ul>

              <h3>Conteúdo Interativo</h3>
              <p>
                Este capítulo inclui simulações científicas avançadas, calculadoras personalizadas 
                e ferramentas interativas para aprofundar seu entendimento sobre os temas abordados.
              </p>
            </motion.div>
          </MainContent>

          <Sidebar>
            <h4 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Tópicos do Capítulo</h4>
            {chapter.topics.map((topic, index) => (
              <TopicCard
                key={index}
                active={activeTopicIndex === index}
                onClick={() => setActiveTopicIndex(index)}
              >
                <TopicTitle>{topic}</TopicTitle>
                <TopicDescription>
                  Clique para explorar este tópico em detalhes
                </TopicDescription>
              </TopicCard>
            ))}
          </Sidebar>
        </ContentGrid>

        <InteractiveSection>
          <SectionTitle>🧬 Pontos-Chave do Capítulo</SectionTitle>
          <KeyPoints>
            {keyPointsData.map((point, index) => (
              <KeyPoint
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <KeyPointIcon>{point.icon}</KeyPointIcon>
                <h4 style={{ marginBottom: '1rem' }}>{point.title}</h4>
                <p style={{ margin: 0 }}>{point.description}</p>
              </KeyPoint>
            ))}
          </KeyPoints>
        </InteractiveSection>

        {chapter.id === 'ch1-2' && (
          <InteractiveSection>
            <SectionTitle>🧬 Simulação Interativa: Dinâmica dos Telômeros</SectionTitle>
            <TelomereSimulation />
          </InteractiveSection>
        )}

        <InteractiveSection>
          <SectionTitle>📚 Referências Científicas</SectionTitle>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              'López-Otín, C. et al. (2013). The hallmarks of aging. Cell 153, 1194-1217.',
              'Kennedy, B.K. et al. (2014). Geroscience: linking aging to chronic disease. Cell 159, 709-713.',
              'Gems, D. & Partridge, L. (2013). Genetics of longevity in model organisms. Nature Reviews Genetics 14, 435-448.'
            ].map((ref, index) => (
              <Card key={index} style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>{ref}</p>
              </Card>
            ))}
          </div>
        </InteractiveSection>
      </ContentSection>
    </PageContainer>
  );
};

export default ChapterPage;
