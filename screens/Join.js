import React, { useState } from "react";
import styled from "styled-components/native";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitEditing = () => {
    console.log("focus password");
  };

  return (
    <Container>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        value={email}
        returnKeyType="next"
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={onSubmitEditing}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        returnKeyType="done"
        onChangeText={(text) => setPassword(text)}
      />
    </Container>
  );
};

export default Join;

const Container = styled.View``;
const TextInput = styled.Text``;
