import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PageConnexion from "./screens/PageConnexion";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageAccueil from "./screens/PageAccueil";
import PageOrdonnance from "./screens/PageOrdonnance";
import PageHistorique from "./screens/PageHistorique";
import PageContactDoctor from "./screens/PageContactDoctor";
import PageOrdonnancePlus from "./screens/PageOrdonnancePlus";
import PageContactUs from "./screens/PageContactUs";
import PageParametres from "./screens/PageParametres";

import Header from "./components/Header";

import { theme } from "./Models/data";
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
          <Stack.Screen
            name="PageAccueil"
            component={PageAccueil}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="PageContactDoctor"
            component={PageContactDoctor}
            options={{
              headerBackVisible: false,
              headerTitle: () => (
                <Header nameGoBack="PageAccueil" nameTitle="Contact m??decin" />
              ),
              headerStyle: {
                backgroundColor: theme.headerBackground,
              },
            }}
          />

          <Stack.Screen
            name="PageOrdonnance"
            component={PageOrdonnance}
            options={{
              headerBackVisible: false,
              headerTitle: () => (
                <Header nameGoBack="PageAccueil" nameTitle="Mes ordonnances" />
              ),
              headerStyle: {
                backgroundColor: theme.headerBackground,
              },
            }}
          />
          <Stack.Screen
            name="PageHistorique"
            component={PageHistorique}
            options={{
              headerBackVisible: false,
              headerTitle: () => (
                <Header nameGoBack="PageAccueil" nameTitle="Mon historique" />
              ),
              headerStyle: {
                backgroundColor: theme.headerBackground,
              },
            }}
          />

          <Stack.Screen
            name="PageContactUs"
            component={PageContactUs}
            options={{
              headerBackVisible: false,
              headerTitle: () => (
                <Header nameGoBack="PageAccueil" nameTitle="Nous contacter" />
              ),
              headerStyle: {
                backgroundColor: theme.headerBackground,
              },
            }}
          />

          <Stack.Screen
            name="PageOrdonnancePlus"
            component={PageOrdonnancePlus}
            options={{
              headerBackVisible: false,
              headerTitle: () => (
                <Header nameGoBack="PageOrdonnance" nameTitle="Ordonnance" />
              ),
              headerStyle: {
                backgroundColor: theme.headerBackground,
              },
            }}
          />
          <Stack.Screen
            name="PageOrdonnancePlusHistory"
            component={PageOrdonnancePlus}
            options={{
              headerBackVisible: false,
              headerTitle: () => (
                <Header nameGoBack="PageHistorique" nameTitle="Ordonnance" />
              ),
              headerStyle: {
                backgroundColor: theme.headerBackground,
              },
            }}
          />
          <Stack.Screen
            name="PageParametres"
            component={PageParametres}
            options={{
              headerBackVisible: false,
              headerTitle: () => (
                <Header nameGoBack="PageAccueil" nameTitle="Param??tres" />
              ),
              headerStyle: {
                backgroundColor: theme.headerBackground,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
