import styled from 'styled-components';

const MessageList = styled.ul`
  max-width: 768px;
  position: relative;
  width: 90%;
  
  div.message {
    align-items: center;
    color: ${props => props.theme.contactListColor};
    margin-bottom: 20px;
    min-height: ${props => props.theme.panelHeight};
    padding: ${props => props.theme.horizontalPadding};
    width: 100%;

    div.info {
      width: 100%
    }

    span {
      font-size: 0.8em;
    }

    span.name {
      font-weight: bold;
    }

    span.date {
      margin-left: ${props => props.theme.horizontalPadding};
    }
  }
  div.to {
    text-align: right;
  }
`;

export default MessageList;
