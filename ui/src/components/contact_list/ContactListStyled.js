import styled from 'styled-components';

const ContactList = styled.ul`
  width: 100%;
  background: ${props => props.theme.contactListBackgroundActive};

  a {
    text-decoration: none;
  }
  
  li.active {
    background: ${props => props.theme.contactListBackgroundActive};
    color: ${props => props.theme.contactListColorActive};
  }
  
  li {
    align-items: center;
    background: ${props => props.theme.contactListBackground};
    color: ${props => props.theme.contactListColor};
    display: flex;
    min-height: ${props => props.theme.panelHeight};
    padding: 0 ${props => props.theme.horizontalPadding} 0 ${props => props.theme.horizontalPadding};
  }
`;

export default ContactList;
