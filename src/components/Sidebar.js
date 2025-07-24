import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { bookStructure } from '../data/bookStructure';

const SidebarContainer = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${props => props.isOpen ? '320px' : '60px'};
  background: ${props => props.theme.surface};
  border-right: 1px solid ${props => props.theme.border};
  z-index: 1000;
  transition: width 0.3s ease;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.border};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    width: ${props => props.isOpen ? '280px' : '0px'};
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.secondary};
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.border};
  }
`;

const ThemeToggle = styled.button`
  background: ${props => props.theme.secondary};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background: ${props => props.theme.accent};
  }
`;

const VolumeSection = styled.div`
  margin: 20px 0;
`;

const VolumeTitle = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 15px 20px;
  text-align: left;
  color: ${props => props.theme.text};
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${props => props.theme.border};
  }

  &::after {
    content: '${props => props.isExpanded ? '−' : '+'}';
    font-size: 1.2rem;
    color: ${props => props.theme.secondary};
  }
`;

const ChapterList = styled(motion.div)`
  padding-left: 10px;
`;

const ChapterItem = styled.button`
  width: 100%;
  background: ${props => props.isActive ? props.theme.secondary + '20' : 'none'};
  border: none;
  padding: 12px 20px;
  text-align: left;
  color: ${props => props.isActive ? props.theme.secondary : props.theme.textSecondary};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid ${props => props.isActive ? props.theme.secondary : 'transparent'};

  &:hover {
    background: ${props => props.theme.border};
    color: ${props => props.theme.text};
  }
`;

const ChapterDescription = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.textSecondary};
  margin-top: 4px;
  opacity: 0.8;
`;

const Sidebar = ({ isDarkMode, toggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [expandedVolumes, setExpandedVolumes] = useState({ volume1: true });

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleVolume = (volumeId) => {
    setExpandedVolumes(prev => ({
      ...prev,
      [volumeId]: !prev[volumeId]
    }));
  };

  const handleChapterClick = (chapterId) => {
    navigate(`/chapter/${chapterId}`);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const isChapterActive = (chapterId) => {
    return location.pathname === `/chapter/${chapterId}`;
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Header>
        {isOpen && <Logo onClick={handleLogoClick}>Código da Vida</Logo>}
        <ToggleButton onClick={toggleSidebar}>
          {isOpen ? '‹' : '›'}
        </ToggleButton>
      </Header>

      {isOpen && (
        <div style={{ padding: '20px' }}>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
          </ThemeToggle>

          {bookStructure.volumes.map((volume) => (
            <VolumeSection key={volume.id}>
              <VolumeTitle
                isExpanded={expandedVolumes[volume.id]}
                onClick={() => toggleVolume(volume.id)}
              >
                {volume.title}
              </VolumeTitle>

              <AnimatePresence>
                {expandedVolumes[volume.id] && (
                  <ChapterList
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {volume.chapters.map((chapter) => (
                      <ChapterItem
                        key={chapter.id}
                        isActive={isChapterActive(chapter.id)}
                        onClick={() => handleChapterClick(chapter.id)}
                      >
                        {chapter.title}
                        <ChapterDescription>
                          {chapter.description}
                        </ChapterDescription>
                      </ChapterItem>
                    ))}
                  </ChapterList>
                )}
              </AnimatePresence>
            </VolumeSection>
          ))}
        </div>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
