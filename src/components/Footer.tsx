import {  FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import { TbBrandGmail } from "react-icons/tb";

import {
  FooterWrapper,
  SocialContainer,
  SocialListItem,
  Contact,
  ContactListItem,
} from '../styles/footer.ts';

export function Footer() {
  return (
    <FooterWrapper>
      <SocialContainer>
          <SocialListItem >
            <a href="https://wa.me/16991868405" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp color='white'/>
            </a>
          </SocialListItem>
          <SocialListItem >
            <a href="mailto:alspereira99@gmail.com" target="_blank" rel="noopener noreferrer" >
              <TbBrandGmail color='white'/>
            </a>
          </SocialListItem>
          <SocialListItem >
            <a href="https://www.linkedin.com/in/ana-laura-silva-pereira-02b91a199//" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color='white'/>
            </a>
           </SocialListItem>
      </SocialContainer>
      <Contact>
        <ContactListItem>
          Telefone: <a href="tel:+5516991868405" style={{ color: 'white', textDecoration:'none' }}> (16) 99186-8405 </a>
        </ContactListItem>
        <ContactListItem >
          Email: <a href="mailto:alspereira99@gmail.com" style={{color: 'white', textDecoration: 'none'}}>alspereira99@gmail.com</a>
        </ContactListItem>
      </Contact>
    </FooterWrapper>
  );
}