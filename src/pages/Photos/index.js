import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Photo = () => {
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
            Fotos e Imagens
          </Text>
        </View>
      </TouchableOpacity>
      <Text>PromoScreen</Text>
    </View>
  );
};
export default Photo;
