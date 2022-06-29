import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";

import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,

} from "../components/Sizer";

import ConnexionInput from "../components/ConnexionInput";

function PageConnexion({ navigation }) {
  function addConnexionHandler(enteredConnexionState) {
    console.log(enteredConnexionState);
    if (enteredConnexionState === "1234") {
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
  textConnexion: {
    fontSize: fontPixel(32),
    fontFamily: "cera-pro-black",
    marginTop: pixelSizeVertical(80),
    marginBottom: pixelSizeVertical(20),
  },
  image: {
    width: widthPixel(175),
    height: heightPixel(250),
    resizeMode: "contain",
    marginTop: pixelSizeVertical(50),
  },
});
