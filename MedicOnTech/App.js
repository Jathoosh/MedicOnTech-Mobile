import { StyleSheet } from "react-native";

import PageConnexion from "./screens/PageConnexion";
import PageAccueil from "./screens/PageAccueil";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as Animatable from 'react-native-animatable';

export default function App() {
  const [fontsLoaded] = useFonts({
    "cera-pro-light": require("./assets/fonts/Cera-Pro-Light.ttf"),
    "cera-pro-black-italic": require("./assets/fonts/Cera-Pro-Black-Italic.ttf"),
    "cera-pro-regular-italic": require("./assets/fonts/Cera-Pro-Regular-Italic.ttf"),
    "cera-pro-medium": require("./assets/fonts/Cera-Pro-Medium.ttf"),
    "cera-pro-bold": require("./assets/fonts/Cera-Pro-Bold.ttf"),
    "cera-pro-black": require("./assets/fonts/Cera-Pro-Black.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <PageAccueil />;
}

const styles = StyleSheet.create({});
