import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicrophoneIcon, HeadsetIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />

        <UserData>
          <strong>Rafael Sousa</strong>
          <span>#1207</span>
        </UserData>
      </Profile>

      <Icons>
        <MicrophoneIcon />
        <HeadsetIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;