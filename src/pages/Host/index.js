import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Host = () => {
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
            Hospedagem
          </Text>
        </View>
      </TouchableOpacity>
      <Text>HostScreen</Text>
    </View>
  );
};
export default Host;
