import React from "react";

import { Container, Icon, IconWrapper, Title } from "./styles";

const ButtonIcon: React.FC<{ title: string }> = (props) => {
  return (
    <Container>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default ButtonIcon;
