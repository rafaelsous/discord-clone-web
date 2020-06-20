import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {
          Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage
              key={n}
              author="Rafael Sousa"
              date="19/06/2020"
              content="Essa é uma mensagem verdadeira"
            />
          ))
        }

        <ChannelMessage
          author="Rafael Sousa"
          date="19/06/2020"
          content={
            <>
              <Mention>@Tatiane Araujo</Mention>, qual é a urgência?
            </>
          }
        />

        <ChannelMessage
          author="Tatiane Araujo"
          date="19/06/2020"
          content={
            <>
              <Mention>@Rafael Sousa</Mention>, pode me emprestar 100 contos? Te
              pago tudinho no final do ano.
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
      
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;