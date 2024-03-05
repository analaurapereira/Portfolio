import styled from 'styled-components';
import '../assets/fonte.css';

export const StyledTitle = styled.h1`
    margin-top: 5%;
    text-align: center;
    font-size: 30px;
    @media (max-width: 1110px) {
        font-size: 26px;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;

export const StyledTitle2 = styled.h1`
    margin-top: 5%;
    text-align: center;
    display: none;
    font-size: 30px;
    @media (max-width: 1110px) {
        font-size: 26px;
    }
    @media (max-width: 900px) {
        display: block;
        margin-left:3%;
    }
`;

export const SectionContainer = styled.div`
    width: 85%;
    display: flex;
    padding: 10px;
    margin: 0;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledText = styled.div`
    text-align: justify;
    padding-top: 8%;
    justify-content: center;
    font-size: 21px;
    @media (max-width: 900px) {
        text-align: justify;
        margin-left: 13%;
    }
    
    @media (max-width: 1110px) {
        font-size: 18px;
    }
`;

export const Text = styled.div`
    line-height: 2;
    font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 18px;
    }
`;

export const StyledImage = styled.img`
    height: 25%;
    width: 25%;
    margin: 5%;
    border-radius: 30px;

    @media (max-width: 900px) {
        width: 50%;
        margin-top: 8%;
        margin-left: 13%;
    }
`;
export const Text2 = styled.div`

`;
