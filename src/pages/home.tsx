import { SectionContainer, StyledTitle, StyledText, StyledImage, Text2, StyledTitle2 } from '../styles/home.ts';
import { HomeText } from '../texts/homeText.tsx';
import Eu from '../assets/img/Eu.jpg';

export const HomePage = () => {
    return (
        <SectionContainer>
            <StyledTitle2>
                        Ana Laura Silva Pereira
            </StyledTitle2>
            <StyledImage src={Eu} />
            <Text2>
                    <StyledTitle>
                        Ana Laura Silva Pereira
                    </StyledTitle>
                <StyledText>
                <HomeText />
                </StyledText>
            </Text2>
        </SectionContainer>
    );
};
