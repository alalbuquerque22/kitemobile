import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import InfoGeral from "./pages/InfoGeral";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Business from "./pages/Business";
import Colors from "./pages/Colors";
import HeaderColor from "./pages/HeaderColor";
import Host from "./pages/Host";
import Market from "./pages/Market";
import Photos from "./pages/Photos";
import Promo from "./pages/Promo";
import Schedule from "./pages/Schedule";
import Sessions from "./pages/Sessions";

const AppDrawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppDrawer.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "#0062FF",
          },
        }}
      >
        <AppDrawer.Screen name="Login" component={Login} />
        <AppDrawer.Screen name="InfoGeral" component={InfoGeral} />
        <AppDrawer.Screen name="SignUp" component={SignUp} />
        <AppDrawer.Screen name="Business" component={Business} />
        <AppDrawer.Screen name="Colors" component={Colors} />
        <AppDrawer.Screen name="HeaderColor" component={HeaderColor} />
        <AppDrawer.Screen name="Host" component={Host} />
        <AppDrawer.Screen name="Market" component={Market} />
        <AppDrawer.Screen name="Photos" component={Photos} />
        <AppDrawer.Screen name="Promo" component={Promo} />
        <AppDrawer.Screen name="Schedule" component={Schedule} />
        <AppDrawer.Screen name="Sessions" component={Sessions} />
      </AppDrawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
