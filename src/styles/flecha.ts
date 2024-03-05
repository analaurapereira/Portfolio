import styled from 'styled-components'; 

export const Button = styled.div`
    position: fixed;
    top:73%; 
    right: 4%;
    font-size: 3rem;
    @media (max-width: 500px) {
        font-size: 2rem;
    }
    
    z-index: 1;
    cursor: pointer;
    color: ${(props) => props.theme.text};
`;
