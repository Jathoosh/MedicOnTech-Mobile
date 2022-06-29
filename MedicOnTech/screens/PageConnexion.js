import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";

import ConnexionInput from "../components/ConnexionInput";

function PageConnexion({ navigation }) {
  async function addConnexionHandler(isValid) {
    if (isValid === true) {
      navigation.replace("PageAccueil");
    }
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require("../assets/Logo-application.png")}
          style={styles.image}
        />
      </View>

      <ConnexionInput onAddConnexion={addConnexionHandler} />
    </KeyboardAvoidingView>
  );
}
export default PageConnexion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  containerImage: {
    alignItems: "center",
  },
  image: {
    width: 175,
    height: 250,
    resizeMode: "contain",
    marginTop: 50,
  },
});
