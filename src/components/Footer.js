import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${props => props.theme.surface};
  border-top: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.text};
  padding: 3rem 0 1rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
  border-bottom: 2px solid ${props => props.theme.accent};
  padding-bottom: 0.5rem;
  display: inline-block;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.textSecondary};
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactLink = styled.a`
  color: ${props => props.theme.textSecondary};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const SiteDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CompanyInfo = styled.div`
  margin-bottom: 1rem;
`;

const CompanyName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`;

const CNPJInfo = styled.p`
  color: ${props => props.theme.textMuted};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const AddressInfo = styled.p`
  color: ${props => props.theme.textMuted};
  font-size: 0.9rem;
  line-height: 1.4;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.surfaceAlt};
  border-radius: 50%;
  color: ${props => props.theme.text};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.accent};
    color: white;
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${props => props.theme.border};
  padding-top: 1rem;
  text-align: center;
  color: ${props => props.theme.textMuted};
  font-size: 0.9rem;
`;

const Copyright = styled.p`
  margin: 0;
  color: ${props => props.theme.textMuted};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* Seção sobre o site */}
          <FooterSection>
            <SectionTitle>Código da Vida</SectionTitle>
            <SectionContent>
              <SiteDescription>
                Enciclopédia interativa dedicada ao estudo e compreensão dos processos 
                de envelhecimento humano, oferecendo conhecimento científico atualizado 
                e ferramentas práticas para longevidade saudável.
              </SiteDescription>
            </SectionContent>
          </FooterSection>

          {/* Seção do desenvolvedor */}
          <FooterSection>
            <SectionTitle>Desenvolvedor</SectionTitle>
            <SectionContent>
              <CompanyInfo>
                <CompanyName>Julio Campos Machado</CompanyName>
                <CompanyName>Like Look Solutions</CompanyName>
                <CNPJInfo>CNPJ: 36.992.198/0001-84</CNPJInfo>
                <AddressInfo>
                  Rua Dante Pellacani, 92<br />
                  São Paulo - SP
                </AddressInfo>
              </CompanyInfo>
            </SectionContent>
          </FooterSection>

          {/* Seção de contato */}
          <FooterSection>
            <SectionTitle>Contato</SectionTitle>
            <SectionContent>
              <ContactItem>
                <span>📧</span>
                <ContactLink href="mailto:juliocamposmachado@gmail.com">
                  juliocamposmachado@gmail.com
                </ContactLink>
              </ContactItem>
              
              <ContactItem>
                <span>📱</span>
                <ContactLink href="https://wa.me/5511970603441" target="_blank" rel="noopener noreferrer">
                  +55 11 97060-3441
                </ContactLink>
              </ContactItem>
              
              <ContactItem>
                <span>📱</span>
                <ContactLink href="https://wa.me/5511992946628" target="_blank" rel="noopener noreferrer">
                  +55 11 99294-6628
                </ContactLink>
              </ContactItem>
              
              <ContactItem>
                <span>🌐</span>
                <ContactLink href="https://likelook.wixsite.com/solutions" target="_blank" rel="noopener noreferrer">
                  Like Look Solutions
                </ContactLink>
              </ContactItem>

              <SocialLinks>
                <SocialLink href="https://wa.me/5511970603441" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                  📱
                </SocialLink>
                <SocialLink href="https://likelook.wixsite.com/solutions" target="_blank" rel="noopener noreferrer" title="Website">
                  🌐
                </SocialLink>
                <SocialLink href="mailto:juliocamposmachado@gmail.com" title="Email">
                  📧
                </SocialLink>
              </SocialLinks>
            </SectionContent>
          </FooterSection>

          {/* Seção de serviços */}
          <FooterSection>
            <SectionTitle>Serviços TI</SectionTitle>
            <SectionContent>
              <SiteDescription>
                A Like Look Solutions oferece soluções especializadas em TI:
              </SiteDescription>
              <ContactItem>• Field Support</ContactItem>
              <ContactItem>• Alocação de Profissionais</ContactItem>
              <ContactItem>• Cabling</ContactItem>
              <ContactItem>• Projetos de Rollout</ContactItem>
              <ContactItem>• Inventário</ContactItem>
              <ContactItem>• Moving</ContactItem>
            </SectionContent>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {currentYear} Código da Vida. Desenvolvido por Julio Campos Machado - Like Look Solutions. 
            Todos os direitos reservados.
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
