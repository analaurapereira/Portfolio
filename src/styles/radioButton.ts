import styled from "styled-components";

export const Radio = styled.span`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  width: 90%;
  margin-left: 15%;
  height: 200%;
  font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 13px;
    }

  .slick-prev, .slick-next {
    color: #333; 
    background-color: #999999ff; 
    border: none;
    border-radius: 50%; 
    width: 30px; 
    height: 30px; 
  }

  .slick-prev:hover, .slick-next:hover {
    background-color: #555; 
    color:#999999ff; 
  }
`;

export const RadioInputContainer = styled.div`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text};
  width: var(--container_width);
  overflow: hidden;
  text-align: center;
  justify-content: center;
  margin-left: 5%;
  width: 80%;
  height: 100%;
  font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 13px;
    }
`;

export const Input = styled.input`
  display: none;
  text-align: justify;
  justify-content: center;
  position:relative;
  align-items: center;
  height: 130%; 
  width: 80%;
  font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 13px;
    }
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: justify;
  z-index: 1;
  font-weight: 600;
  font-size: 20px;
  position: relative;
  align-items: center;
  width: 80%;
  height:80px;
  font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 13px;
    }
    @media (max-width: 400px) {
        font-size: 9px;
    }

  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const Selection = styled.span`
  display: none;
  position: absolute;
  height: 100%;
  z-index: 0;
  font-size: 20px;
  left: 0;
  top: 0;
  transition: background-color 1.0s  ease;
  display: inline-block;
  text-align: justify;
  justify-content: center;
  align-items: center;
  font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 13px;
    }
    @media (max-width: 400px) {
        font-size: 9px;
    }
`;


export const CheckedLabel = styled(Label)`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #107acc;
  width: 80%;
  color: white;
  overflow: hidden;
  border: 1px solid rgba(53, 52, 52, 0);
  text-align: center;
  justify-content: center;
  height: 100%;
  font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 13px;
    }
    @media (max-width: 400px) {
        font-size: 9px;
    }
`;

export const CheckedSelection = styled(Selection)`
  display: inline-block;
  font-size: 21px;
    @media (max-width: 1110px) {
        font-size: 13px;
    }
    @media (max-width: 400px) {
        font-size: 9px;
    }
`;

export const FirstCheckedSelection = styled(Selection)`
  
`;

export const SecondCheckedSelection = styled(Selection)`

`;

export const ThirdCheckedSelection = styled(Selection)`

`;

export const FourthCheckedSelection = styled(Selection)`

`;