import styled from 'styled-components';

const AccountInfo = styled.div`
  background: ${props => props.theme.lightBackground};
  width: 100%;
  
  section {
    padding: ${props => props.theme.horizontalPadding};
  }

  h2 {
    color: ${props => props.theme.dark};
    margin-bottom: ${props => props.theme.panelHeight};
  }

  img {
    display: block;
    margin-bottom: ${props => props.theme.panelHeight};
    width: 50%;
  }
`;

export default AccountInfo;
