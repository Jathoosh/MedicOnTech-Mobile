import { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";

function ConnexionInput(props) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const onSubmitFormHandler = async (event) => {
    if (typeof password !== "string" || password === "") {
      alert("Password or Email is invalid");
      return;
    }
    props.onAddConnexion(password);
    setPassword("");
  };

  return (
    <View style={styles.encadres}>
      <TextInput
        autoCorrect={false}
        secureTextEntry={true}
        spellCheck={false}
        style={styles.textInput}
        placeholder="Saisir votre code pin"
        onChangeText={onChangePasswordHandler}
        editable={!isLoading}
        value={password}
      />
      <Text style={styles.text}>Mot de passe oublié ?</Text>
      <Pressable
        style={styles.button}
        onPress={onSubmitFormHandler}
        disabled={isLoading}
      >
        <Text style={{ fontSize: 24, fontFamily: "cera-pro-medium" }}>
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
  text: {
    textAlign: "right",
    marginBottom: 38,
    paddingRight: 10,
    fontFamily: "cera-pro-light",
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#2FB55E",
    alignItems: "center",
    justifyContent: "center",
    height: 54,
  },
});
