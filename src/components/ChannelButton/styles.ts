import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  > div.channel-button-icons svg {
    display: none;
  }

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > div.channel-button-icons svg {
      display: inline;
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`
export const InviteIcon = styled(PersonAdd)`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  color: var(--symbol);
  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`
export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  color: var(--symbol);

  &:hover {
    color: var(--white);
  }
`