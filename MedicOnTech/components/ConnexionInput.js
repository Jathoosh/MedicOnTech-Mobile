import { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
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
        keyboardType="numeric"
        style={styles.textInput}
        placeholder="Saisir votre code pin"
        onChangeText={connexionInputHandler}
        value={enteredConnexionState}
      />
      <Text style={{ textAlign: "right", marginBottom: 38, paddingRight: 10 }}>
        Mot de passe oublié ?
      </Text>
      <Pressable style={styles.button} onPress={addConnexionHandler}>
        <Text style={{ fontSize: 24 }}>Se connecter</Text>
      </Pressable>
    </View>
  );
}
export default ConnexionInput;

const styles = StyleSheet.create({
  encadres: {
    alignItems: "stretch",
    flex: 1,
    paddingHorizontal: 15,
  },
  textInput: {
    alignItems: "stretch",
    height: 54,
    backgroundColor: "#D9D9D9",
    paddingLeft: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#2FB55E",
    alignItems: "center",
    justifyContent: "center",
    height: 54,
  },
});
