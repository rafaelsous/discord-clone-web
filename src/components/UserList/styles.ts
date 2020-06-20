import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 16px;

  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  :-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.div`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
  text-transform: uppercase;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
  background: transparent;
  transition: background .2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-size: 16px;
    font-weight: 500;
    color: var(--white);
    opacity: .7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;
    padding: 4px 5px;
    background-color: var(--discord);
    border-radius: 4px;
    color: var(--white);
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--primary);
  flex-shrink: 0;

  &.bot {
    background-color: var(--mention-detail);
  }
`;