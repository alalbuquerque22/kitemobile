import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInputMask } from "react-native-masked-text";
import api from "../../services/api";
function HomeScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const cepRef = useRef(null);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE4NTQ4MDIxLCJleHAiOjE2NTAwODQwMjF9.05EdRstXAQrBkqT-Kpo20zXbjAug3WVKXNhey-tyanY";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const unmasked = cepRef?.current.getRawValue();
    async function getCep() {
      const result = await api
        .get(`?zip_code=${unmasked}`, config)
        .then((response) => {
          console.log(response.data);
          setAddress(response.data);
        })
        .catch((err) => {
          console.error("erro na Requisizao => " + err);
        });
    }
    getCep();
  }, [cep]);
  let showMessageBox = false;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#0062FF",
            justifyContent: "center",
          }}
        >
          <Text style={{ marginLeft: 5, color: "#FFF", fontWeight: "bold" }}>
            Header
          </Text>
        </View>
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.containerKeyboarding}
      >
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text style={styles.label}>Nome Fantasia</Text>
              <TextInput
                style={styles.input}
                placeholder="Obrigatório"
                autoCorrect={false}
              />
            </View>
            <View>
              <Text style={styles.label}>Descrição Geral</Text>
              <TextInput
                style={styles.input}
                placeholder="Obrigatório (máximo 100 caracteres)"
                autoCorrect={false}
              />
            </View>
            <View>
              <Text style={styles.label}>Telefone</Text>
              <TextInputMask
                type={"cel-phone"}
                options={{
                  maskType: "BRL",
                  withDDD: true,
                  dddMask: "(99) ",
                }}
                value={phone}
                onChangeText={(text) => setPhone(text)}
                style={styles.input}
                placeholder="Obrigatório"
                autoCorrect={false}
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styles.label}>WhatsApp</Text>
              <TextInputMask
                type={"cel-phone"}
                options={{
                  maskType: "BRL",
                  withDDD: true,
                  dddMask: "(99) ",
                }}
                value={whatsapp}
                onChangeText={(text) => setWhatsapp(text)}
                style={styles.input}
                placeholder="Obrigatório"
                autoCorrect={false}
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styles.label}>Número</Text>
              <TextInput
                style={styles.input}
                placeholder="Obrigatório"
                autoCorrect={false}
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styles.label}>CEP</Text>
              <TextInputMask
                type={"zip-code"}
                style={styles.input}
                value={cep}
                onChange={(text) => setCep(text)}
                placeholder="Obrigatório"
                autoCorrect={false}
                ref={cepRef}
              />
            </View>
            {!cep && (
              <View style={styles.messageBox}>
                <Text style={styles.messageText}>
                  {address.address}, {address.neighborhood}, {address.city.name}
                  ,{address.state.name}
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerKeyboarding: { flex: 1 },
  container: { flex: 1, padding: 5, paddingTop: 20 },
  input: {
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    borderColor: "#e7e7e7",
    borderWidth: 1,
  },
  label: { color: "#7BAEFF", fontSize: 14, padding: 5 },
  messageBox: {
    backgroundColor: "#f2f2f2",
    height: 90,
    width: 340,
  },
  messageText: { color: "black", padding: 10, fontSize: 15 },
});

export default HomeScreen;
