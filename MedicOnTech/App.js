import { StyleSheet } from "react-native";

import PageConnexion from "./screens/PageConnexion";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "cera-pro-light": require("./assets/cera pro font/Cera Pro Light.ttf"),
    "cera-pro-black-italic": require("./assets/cera pro font/Cera Pro Black Italic.ttf"),
    "cera-pro-regular-italic": require("./assets/cera pro font/Cera Pro Regular Italic.ttf"),
    "cera-pro-medium": require("./assets/cera pro font/Cera Pro Medium.ttf"),
    "cera-pro-bold": require("./assets/cera pro font/Cera Pro Bold.ttf"),
    "cera-pro-black": require("./assets/cera pro font/Cera Pro Black.ttf"),
  });

  return <PageConnexion />;
}

const styles = StyleSheet.create({});
