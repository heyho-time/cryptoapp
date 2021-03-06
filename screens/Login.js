import React from "react";
import styled from "styled-components/native";

const Login = ({ navigation: { navigate } }) => (
  <Container>
    <Text>
      Don't have an account?{" "}
      <Btn onPress={() => navigate("Join")}>
        <BtnTxt>Join</BtnTxt>
      </Btn>
    </Text>
  </Container>
);

export default Login;

const Container = styled.View``;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;
const BtnTxt = styled.Text``;
