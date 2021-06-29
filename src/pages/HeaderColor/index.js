import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderColor = () => {
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
            Cores
          </Text>
        </View>
      </TouchableOpacity>
      <Text>Header</Text>
    </View>
  );
};
export default HeaderColor;
