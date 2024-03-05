import { SobrenosText1 } from "../texts/sobrenosText"
import { SobrenosText2  } from "../texts/sobrenosText2"
import Kumon from '../assets/img/Kumon.png'
import Google from '../assets/img/google-destaque.webp'
import { SectionContainer, SectionContainer2, StyledText, StyledTitle, StyledTitle2} from "../styles/experiencias"
import { useEffect, useState } from 'react';

const styles = {
  height: '30%',
  width: '30%',
  margin: '5%',
  marginTop: '13%',
  borderRadius: '30px',
  marginLeft: '10%',
};

const stylesMobile = {
  height: '45%',
  width: '45%',
  margin: '5%',
  marginTop: '5%',
  borderRadius: '30px',
  marginLeft: '29%',
};

const stylesMobile2 = {
  height: '60%',
  width: '60%',
  margin: '5%',
  marginTop: '10%',
  borderRadius: '30px',
  marginLeft: '26%',
};

export function Experiencias() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1110);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1110);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <SectionContainer>
        <StyledText>
          <StyledTitle>Estágio no Kumon (2023-2024)<br /><br /></StyledTitle>
          {isMobile ? <img src={Kumon} style={stylesMobile} /> : null}
          <SobrenosText1 />
        </StyledText>
            {!isMobile ?<img src={Kumon} style={styles} /> : null}
      </SectionContainer>
      <SectionContainer2>
            {!isMobile ? <img src={Google} style={styles} /> : null}
        <StyledText>
          <StyledTitle2>Trabalho voluntário como Google Expert <br />(2023-presente)</StyledTitle2>
          {isMobile ? <img src={Google} style={stylesMobile2} /> : null}
          <SobrenosText2 />
        </StyledText>
      </SectionContainer2>
    </>
  );
}

