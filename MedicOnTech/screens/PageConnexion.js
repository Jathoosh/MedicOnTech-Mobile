import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";

import ConnexionInput from "../components/ConnexionInput";

function PageConnexion() {
  function addConnexionHandler(enteredConnexionState) {
    console.log(enteredConnexionState);
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require("../assets/Logo_application.png")}
          style={styles.image}
        />
        <Text style={styles.textConnexion}>Connexion</Text>
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
  textConnexion: { fontSize: 32, fontFamily: "cera-pro-black" },
  image: {
    marginTop: 30,
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
});
