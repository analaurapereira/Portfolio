import styled from "styled-components";
import '../assets/fonte.css';

export const Paragraph = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    justify-content: center;
    padding: 5%; 
    align-items: flex-start;
    font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 18px;
    }

`;

export const ParagraphTytle = styled.h1`
    margin-left:10%;
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
    margin-left: 9.6%;
    font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 18px;
    }
`;