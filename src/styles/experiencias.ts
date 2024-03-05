import styled from "styled-components";

export const SectionContainer = styled.div`
    width: 85%;
    display: flex;
    padding: 10px;
    margin: 0;
    margin-left: 5%;

    @media (max-width: 1110px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const SectionContainer2 = styled.div`
    width: 85%;
    display: flex;
    padding: 10px;
    margin: 0;
    margin-left: 2%;

    @media (max-width: 1110px) {
        flex-direction: column;
        align-items: center;
        width: 80%;
    }
`;

export const StyledText = styled.span`
    flex-direction: column;

    @media (min-width: 1110px) {
        flex-direction: row-reverse; 
    }
`;


export const Text = styled.div`
    margin-top: 5%;
    line-height: 2;
    text-align: justify;
    width: 85%;
    margin-left: 10%;
    font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 18px;
    }
`;

export const StyledTitle = styled.h1`
    margin-left: 25%;
    margin-top: 10%;
    font-size: 30px;
    @media (max-width: 1110px) {
        text-align: center;
        margin-left: 5%;
        font-size: 26px;
    }
`;

export const StyledTitle2 = styled.h1`
    margin-left: 8%;
    text-align: center;
    margin-top: 20%;
    font-size: 30px;
    @media (max-width: 1110px) {
        text-align: center;
        margin-left: 15%;
        font-size: 26px;
    }
`;

export const Text2 = styled.div`
    margin-top: 5%;
    line-height: 2;
    text-align: justify;
    width: 92%;
    margin-left: 8%;
    font-size: 21px;
    @media (max-width: 1110px) {
        margin-left: 15%;
        font-size: 18px;
    }
`;

export const StyledImage = styled.img`
    height: 30%;
    width: 30%;
    margin: 5%;
    margin-top: 10%;
    border-radius: 30px;
    margin-left: 10%;
    @media (min-width: 1110px) {
        order: -1; 
    }
`;