import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Colors = () => {
  return (
    <View>
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
            Cabeçalho
          </Text>
        </View>
      </TouchableOpacity>
      <Text>Colors</Text>
    </View>
  );
};
export default Colors;
