import styled from 'styled-components';

const MessageList = styled.ul`
  padding: ${props => props.theme.horizontalPadding};

  div {
    align-items: center;
    color: ${props => props.theme.contactListColor};
    margin-bottom: 20px;
    min-height: ${props => props.theme.panelHeight};
    padding: 0 ${props => props.theme.horizontalPadding} 0 ${props => props.theme.horizontalPadding};

    span {
      display: block;
      font-weight: bold;
      width: 100%
    }
  }
`;

export default MessageList;
