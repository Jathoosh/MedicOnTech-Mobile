import { StyleSheet } from "react-native";

import PageConnexion from "./screens/PageConnexion";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "cera-pro-light": require("./assets/fonts/Cera-Pro-Light.ttf"),
    "cera-pro-black-italic": require("./assets/fonts/Cera-Pro-Black-Italic.ttf"),
    "cera-pro-regular-italic": require("./assets/fonts/Cera-Pro-Regular-Italic.ttf"),
    "cera-pro-medium": require("./assets/fonts/Cera-Pro-Medium.ttf"),
    "cera-pro-bold": require("./assets/fonts/Cera-Pro-Bold.ttf"),
    "cera-pro-black": require("./assets/fonts/Cera-Pro-Black.ttf"),
  });

  return <PageConnexion />;
}

const styles = StyleSheet.create({});
