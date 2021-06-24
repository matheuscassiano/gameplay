import React, { useState } from "react";
import { Text, View } from "react-native";

import { Container, Input } from "./styles";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <Container>
      <Text>Login</Text>
      <Input placeholder="Seu email" onChangeText={setEmail} />
    </Container>
  );
};

export default SignIn;
