import styled from 'styled-components';

const SendForm = styled.div`
  // bottom: ${props => props.theme.panelHeight};
  // position: absolute;
  width: 100%;
  height: 80px;

  img {
    cursor: pointer;
    margin-left: ${props => props.theme.horizontalPadding};
  }

  textarea {
    min-width: 75%;
    height: 70px;
    margin-left: ${props => props.theme.horizontalPadding};
  }
`;

export default SendForm;
