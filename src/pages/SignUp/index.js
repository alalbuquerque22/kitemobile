import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity, RectButton } from "react-native-gesture-handler";
import Logo from "../../assets/Frame2.png";
const SignUp = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#0062FF",
        justifyContent: "center",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.containerKeyboarding}
      >
        <ScrollView style={{ marginLeft: "2%" }}>
          <View style={styles.card}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
              }}
            >
              <Image source={Logo} style={styles.logo} />
            </View>
            <TextInput style={styles.input} placeholder="Nome"></TextInput>
            <TextInput style={styles.input} placeholder="Sobrenome"></TextInput>
            <TextInput style={styles.input} placeholder="E-mail"></TextInput>
            <TextInput style={styles.input} placeholder="CPF/CNPJ"></TextInput>
            <TextInput style={styles.input} placeholder="Whatsapp"></TextInput>
            <TextInput style={styles.input} placeholder="Senha"></TextInput>
            <TextInput style={styles.input} placeholder="CEP"></TextInput>

            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: 20,
              }}
            >
              ou
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={[
                  styles.botoesAcesso,
                  { backgroundColor: "#000", width: "100%", height: 45 },
                ]}
              >
                <Text style={{ color: "#fff" }}>Criar conta com Apple</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.botoesAcesso,
                  { backgroundColor: "#Fffff1", width: "100%", height: 45 },
                ]}
              >
                <Text style={{ color: "#000" }}>Criar conta com Google</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <RectButton
              style={[styles.buttonFilled, { width: "94%", height: 50 }]}
            >
              <Text style={{ color: "#000", fontWeight: "bold" }}>Criar</Text>
            </RectButton>
            <RectButton style={{ marginTop: 10 }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Fazer Login
              </Text>
            </RectButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "98%",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 55,
    width: "98%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    borderColor: "#e7e7e7",
    borderWidth: 1,
  },
  botoesAcesso: {
    height: 55,
    width: "98%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    justifyContent: "center",
  },
  buttonFilled: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 40,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignUp;
