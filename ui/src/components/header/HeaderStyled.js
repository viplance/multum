import styled from 'styled-components';

const Header = styled.header`
  a {
    color: white;
    margin-right: 20px;
  }
  li {
    cursor: pointer;
    float: left;
    text-decoration: underline;
  }
  background: ${props => props.theme.dark};
  color: ${props => props.theme.light};
  min-height: ${props => props.theme.panelHeight};
  padding: 0 ${props => props.theme.horizontalPadding} 0 ${props => props.theme.horizontalPadding};
`;

export default Header;
