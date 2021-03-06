import styled from 'styled-components';

const Footer = styled.footer`
  background: ${props => props.theme.dark};
  color: ${props => props.theme.light};
  min-height: ${props => props.theme.panelHeight};
  padding: 0 ${props => props.theme.horizontalPadding} 0 ${props => props.theme.horizontalPadding};
`;

export default Footer;
