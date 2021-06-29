import React from "react";
// import{AppLoading} from 'expo';
// import {Roboto_400Regular,Roboto_500Medium} from '@expo-google-fonts/roboto';
// import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';

import { StatusBar, StyleSheet, Text, View } from "react-native";

import Routes from "./src/routes.js";

export default function App() {
  // const [fontsLoaded] = useFonts({s
  //   Roboto_400Regular,
  //   Roboto_500Medium,
  //   Ubuntu_700Bold,
  // });
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="FFF" translucent />
      <Routes />
    </>
  );
}
