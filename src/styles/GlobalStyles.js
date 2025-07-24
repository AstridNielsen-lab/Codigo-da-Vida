import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  light: {
    primary: '#0A1628',
    secondary: '#1E40AF',
    accent: '#06B6D4',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    background: '#FFFFFF',
    backgroundAlt: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceAlt: '#F1F5F9',
    text: '#0F172A',
    textSecondary: '#64748B',
    textMuted: '#94A3B8',
    border: '#E2E8F0',
    borderLight: '#F1F5F9',
    shadow: 'rgba(0, 0, 0, 0.08)',
    shadowHover: 'rgba(0, 0, 0, 0.12)',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradientBlue: 'linear-gradient(135deg, #1E40AF 0%, #06B6D4 100%)',
  },
  dark: {
    primary: '#F8FAFC',
    secondary: '#3B82F6',
    accent: '#06B6D4',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    background: '#0F172A',
    backgroundAlt: '#1E293B',
    surface: '#1E293B',
    surfaceAlt: '#334155',
    text: '#F8FAFC',
    textSecondary: '#CBD5E1',
    textMuted: '#94A3B8',
    border: '#334155',
    borderLight: '#475569',
    shadow: 'rgba(0, 0, 0, 0.25)',
    shadowHover: 'rgba(0, 0, 0, 0.35)',
    gradient: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)',
    gradientBlue: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
  }
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    transition: all 0.3s ease;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
    color: ${props => props.theme.textSecondary};
  }

  a {
    color: ${props => props.theme.secondary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.accent};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .fade-in {
    animation: fadeIn 0.6s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .container {
      padding: 0 15px;
    }
  }
`;

export const Card = styled.div`
  background: ${props => props.theme.surface};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px ${props => props.theme.shadow};
  }
`;

export const Button = styled.button`
  background: ${props => props.primary ? props.theme.secondary : 'transparent'};
  color: ${props => props.primary ? '#FFFFFF' : props.theme.secondary};
  border: 2px solid ${props => props.theme.secondary};
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.primary ? props.theme.accent : props.theme.secondary};
    color: #FFFFFF;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
