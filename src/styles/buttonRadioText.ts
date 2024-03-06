import styled from "styled-components";
import '../assets/fonte.css';

export const Paragraph = styled.div`
    display:flex;
    flex-direction:column;
    width:95%;
    justify-content: center;
    padding: 5%; 
    align-items: flex-start;
    font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 18px;
    }

`;

export const ParagraphTytle = styled.h1`
    font-size: 28px;
    margin-top: 8%;
    @media (max-width: 1110px) {
        font-size: 24px;
    }
`;

export const Text = styled.div`
    margin-top: 0.6%;
    line-height: 2;
    text-align: justify;
    font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 18px;
    }
`;