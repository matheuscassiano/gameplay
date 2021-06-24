import React from "react";
import ButtonIcon from "../../compoents/ButtonIcon";

import { Container, Cover, Content, Title, SubTitle } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Cover />
      <Content>
        <Title>
          Organize {`\n`}suas jogatinas {`\n`}facilmente
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games {`\n`}favoritos com seus amigos
        </SubTitle>
        <ButtonIcon title="Entrar com Discord" />
      </Content>
    </Container>
  );
};

export default SignIn;
