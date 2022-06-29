import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../components/Sizer";

function ConnexionInput(props) {
  const [enteredConnexionState, setEnteredConnexion] = useState("");
  const [enteredPasswordState, setEnteredPassword] = useState("");
  const [isStored, setIsStored] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await SecureStore.getItemAsync("token");
      console.log(storedToken);
      if (storedToken) {
        setIsStored(true);
      }
    }
    fetchToken();
  }, []);

  function connexionInputHandler(text) {
    setEnteredConnexion(text);
  }
  function passwordInputHandler(text) {
    setEnteredPassword(text);
  }

  function validHandler() {
    setIsValid(true);
    props.onAddConnexion(true);
  }
  async function addConnexionHandler() {
    async function fetchToken() {
      const storedToken = await SecureStore.getItemAsync("token");
      if (storedToken === enteredConnexionState) {
        validHandler();
      } else {
        console.log("Invalid connexion");
      }
    }
    fetchToken();
    setEnteredConnexion("");
  }

  async function removeItemValue() {
    try {
      await SecureStore.deleteItemAsync("token");
      return true;
    } catch (exception) {
      return false;
    }
  }

  async function authenticateConnexionHandler() {
    if (
      enteredConnexionState === enteredPasswordState &&
      enteredConnexionState !== "" &&
      enteredPasswordState !== "" &&
      typeof enteredConnexionState === "string" &&
      typeof enteredPasswordState === "string"
    ) {
      await SecureStore.setItemAsync("token", enteredConnexionState);
      setEnteredConnexion("");
      setEnteredPassword("");
      validHandler();
    } else {
      console.log("Invalid authentification");
      setCount(count + 1);
      setIsWrongPassword(true);
    }
  }
  return (
    <View style={styles.encadres}>
      {isStored ? (
        <View>
          <Text style={styles.textConnexion}>Connexion</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={true}
            spellCheck={false}
            style={styles.textInput}
            placeholder="Saisir votre code pin"
            onChangeText={connexionInputHandler}
            value={enteredConnexionState}
          />
          <Text style={styles.text} onPress={removeItemValue}>
            Mot de passe oublié ?
          </Text>
          <Pressable style={styles.button} onPress={addConnexionHandler}>
            <Text
              style={{ fontSize: fontPixel(24), fontFamily: "cera-pro-medium" }}
            >
              Se connecter
            </Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Text style={styles.textConnexion}>Authentification</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={true}
            spellCheck={false}
            style={[styles.textInput, { marginBottom: pixelSizeVertical(50) }]}
            placeholder="Saisir votre code pin"
            onChangeText={connexionInputHandler}
            value={enteredConnexionState}
          />
          <TextInput
            autoCorrect={false}
            secureTextEntry={true}
            spellCheck={false}
            style={[styles.textInput, { marginBottom: pixelSizeVertical(20) }]}
            placeholder="Confirmer votre code pin"
            onChangeText={passwordInputHandler}
            value={enteredPasswordState}
          />
          {isWrongPassword && (
            <Text style={styles.textWrong}>Invalid password ({count})</Text>
          )}
          <Pressable
            style={[styles.button, { marginTop: pixelSizeVertical(20) }]}
            onPress={authenticateConnexionHandler}
          >
            <Text
              style={{ fontSize: fontPixel(24), fontFamily: "cera-pro-medium" }}
            >
              S'authentifier
            </Text>
          </Pressable>
        </View>
      )}
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
    fontFamily: "cera-pro-medium",
    letterSpacing: 1,
  },
  textWrong: {
    color: "red",
    fontFamily: "cera-pro-medium",
    fontSize: fontPixel(18),
    alignSelf: "center",
  },
  text: {
    textAlign: "right",
    marginBottom: 38,
    paddingRight: 10,
    fontFamily: "cera-pro-light",
  },
  textConnexion: {
    fontSize: 32,
    fontFamily: "cera-pro-black",
    marginTop: 80,
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#2FB55E",
    alignItems: "center",
    justifyContent: "center",
    height: 54,
  },
});
