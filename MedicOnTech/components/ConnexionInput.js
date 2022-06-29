import { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,

} from "./Sizer";


function ConnexionInput(props) {
  const [enteredConnexionState, setEnteredConnexion] = useState("");

  function connexionInputHandler(text) {
    setEnteredConnexion(text);
  }
  function addConnexionHandler() {
    props.onAddConnexion(enteredConnexionState);
    setEnteredConnexion("");
  }
  return (
    <View style={styles.encadres}>
      <TextInput
        autoCorrect={false}
        secureTextEntry={true}
        spellCheck={false}
        style={styles.textInput}
        placeholder="Saisir votre code pin"
        onChangeText={connexionInputHandler}
        value={enteredConnexionState}
      />
      <Text style={styles.text}>Mot de passe oublié ?</Text>
      <Pressable style={styles.button} onPress={addConnexionHandler}>
        <Text style={{ fontSize: fontPixel(24), fontFamily: "cera-pro-medium" }}>
          Se connecter
        </Text>
      </Pressable>
    </View>
  );
}
export default ConnexionInput;

const styles = StyleSheet.create({
  encadres: {
    alignItems: "stretch",
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(15),
  },
  textInput: {
    alignItems: "stretch",
    height: heightPixel(54),
    backgroundColor: "#D9D9D9",
    paddingLeft: pixelSizeHorizontal(15),
    borderRadius: 10,
    marginBottom: pixelSizeVertical(12),
    fontFamily: "cera-pro-medium",
    letterSpacing: 1,
  },
  text: {
    textAlign: "right",
    marginBottom: pixelSizeVertical(38),
    paddingRight: pixelSizeHorizontal(10),
    fontFamily: "cera-pro-light",
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#2FB55E",
    alignItems: "center",
    justifyContent: "center",
    height: heightPixel(54),
  },
});
