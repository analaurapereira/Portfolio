import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    background-color: #063254;
    color: white;
    padding: 3em;
    text-align: center;
    margin-top:9%;
    position: bottom;
    margin-bottom: 0;
`;

export const SocialContainer = styled.ul`
    display:flex;
    justify-content: center;
    list-style-type: none;
`;

export const SocialListItem = styled.li`
    margin:0 1em 1em;
    font-size: 1.5em;
    cursor:pointer;

    &:hover{
        color: green;
    }
  
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;

    @media (min-width: 1110px) {
      display: inline-block;
    }
`;

export const ContactListItem = styled.span`
    font-weight: bold;
    margin: 0.5em;
    text-align: center;
`;
