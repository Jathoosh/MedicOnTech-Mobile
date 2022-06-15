import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PageConnexion from "./screens/PageConnexion";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageAccueil from "./screens/PageAccueil";

const Stack = createNativeStackNavigator();

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

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PageConnexion">
          <Stack.Screen
            name="PageConnexion"
            component={PageConnexion}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="PageAccueil" component={PageAccueil} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
