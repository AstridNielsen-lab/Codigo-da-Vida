import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import SplashScreen from './components/SplashScreen';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ChapterPage from './pages/ChapterPage';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: ${props => props.sidebarOpen ? '320px' : '60px'};
  transition: margin-left 0.3s ease;
  background: ${props => props.theme.background};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Theme context hook for managing theme state
const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return { isDarkMode, toggleTheme };
};

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  // Handle volume selection from homepage
  const handleVolumeSelect = (volumeId) => {
    console.log('Selected volume:', volumeId);
    // Here you would typically navigate to the volume overview
  };

  // Handle sidebar state changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  // Handler para quando o splash screen terminar
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Se ainda está mostrando splash, renderize apenas o splash
  if (showSplash) {
    return (
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <SplashScreen onComplete={handleSplashComplete} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <MainContainer>
            <Sidebar
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
            />
            
            <MainContent sidebarOpen={sidebarOpen}>
              <ContentWrapper>
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <Homepage 
                        onVolumeSelect={handleVolumeSelect}
                      />
                    } 
                  />
                  <Route 
                    path="/home" 
                    element={<Navigate to="/" replace />} 
                  />
                  
                  {/* Future routes for chapters and volumes */}
                  <Route 
                    path="/volume/:volumeId" 
                    element={
                      <div style={{ padding: '40px', textAlign: 'center' }}>
                        <h2>Volume Content</h2>
                        <p>Esta seção será implementada com o conteúdo específico do volume.</p>
                      </div>
                    } 
                  />
                  
                  <Route 
                    path="/chapter/:chapterId" 
                    element={<ChapterPage />} 
                  />
                  
                  <Route 
                    path="/simulations" 
                    element={
                      <div style={{ padding: '40px' }}>
                        <h2>Simulações Científicas</h2>
                        <p>Centro de simulações interativas sobre processos biológicos do envelhecimento.</p>
                      </div>
                    } 
                  />
                  
                  <Route 
                    path="/calculator" 
                    element={
                      <div style={{ padding: '40px' }}>
                        <h2>Calculadora de Idade Biológica</h2>
                        <p>Ferramenta para calcular sua idade biológica baseada em biomarcadores.</p>
                      </div>
                    } 
                  />
                  
                  <Route 
                    path="/protocols" 
                    element={
                      <div style={{ padding: '40px' }}>
                        <h2>Protocolos Práticos</h2>
                        <p>Guias práticos baseados em evidências científicas para longevidade.</p>
                      </div>
                    } 
                  />
                  
                  <Route 
                    path="/ethics" 
                    element={
                      <div style={{ padding: '40px' }}>
                        <h2>Debates Éticos</h2>
                        <p>Discussões sobre as implicações éticas do prolongamento da vida.</p>
                      </div>
                    } 
                  />
                  
                  <Route 
                    path="/quiz" 
                    element={
                      <div style={{ padding: '40px' }}>
                        <h2>Quiz Interativo</h2>
                        <p>Teste seus conhecimentos sobre o envelhecimento e longevidade.</p>
                      </div>
                    } 
                  />
                  
                  <Route 
                    path="/references" 
                    element={
                      <div style={{ padding: '40px' }}>
                        <h2>Referências Científicas</h2>
                        <p>Biblioteca completa de referências científicas utilizadas na enciclopédia.</p>
                      </div>
                    } 
                  />
                  
                  {/* Catch-all route */}
                  <Route 
                    path="*" 
                    element={<Navigate to="/" replace />} 
                  />
                </Routes>
              </ContentWrapper>
            </MainContent>
          </MainContainer>
          
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
