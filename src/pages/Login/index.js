import React from "react";

import {
  View,
  Text,
  ImageBackground,
  Image,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RectButton } from "react-native-gesture-handler";
import Frame from "../../assets/Frame.png";
function Login({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/Background.png")}
        style={styles.container}
      >
        <View style={styles.CircleArea}>
          <Image source={Frame} style={styles.CircleImage} />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.label}> Realize seu login </Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            autoCorrect={false}
            placeholderTextColor="#4E7ED8"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            placeholderTextColor="#4E7ED8"
          />
          <View style={styles.forgot}>
            <Text style={{ color: "white" }}>Esqueceu sua senha ?</Text>
          </View>
        </View>

        <View style={styles.autenticacao}>
          <View>
            <Text style={{ color: "white", marginBottom: 15 }}>ou</Text>
          </View>
          <View style={styles.areaButtonAuth}>
            <RectButton style={styles.buttonAuthentication}>
              <Text style={{ color: "#fff" }}>Apple</Text>
            </RectButton>
            <RectButton
              style={[styles.buttonAuthentication, { backgroundColor: "#fff" }]}
            >
              <Text>Google</Text>
            </RectButton>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.acesso}>
        <RectButton style={styles.buttonFilled}>
          <Text style={{ color: "#FFF", fontWeight: "bold" }}>Entrar</Text>
        </RectButton>
        <RectButton style={styles.buttonUnFilled}>
          <Text>Criar conta</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 530,
    width: "100%",
    borderBottomLeftRadius: 80,
  },
  CircleArea: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  circleImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
  },
  inputArea: {
    marginTop: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 55,
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    borderColor: "#e7e7e7",
    borderWidth: 1,
  },
  forgot: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "right",
  },
  autenticacao: {
    marginTop: "4%",
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  areaButtonAuth: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonAuthentication: {
    width: "35%",
    backgroundColor: "#000",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
  },

  acesso: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: 99,
    color: "red",
  },
  buttonFilled: {
    width: "80%",
    backgroundColor: "#1338A0",
    borderRadius: 10,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonUnFilled: {
    marginTop: 20,

    color: "#000",
  },
});
export default Login;
