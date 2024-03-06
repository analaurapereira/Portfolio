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
        <ContactListItem >
          Email: <a href="mailto:alspereira99@gmail.com" style={{color: 'white', textDecoration: 'none'}}>alspereira99@gmail.com</a>
        </ContactListItem>
      </Contact>
    </FooterWrapper>
  );
}
