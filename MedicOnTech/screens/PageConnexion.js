import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";

import ConnexionInput from "../components/ConnexionInput";
/*import { openDatabase } from "react-native-sqlite-storage";*/

/*const db = openDatabase({
  name: "medicontech",
  location: "default",
});

const createTables = () => {
  db.transaction((query) => {
    query(
      `CREATE TABLE IF NOT EXISTS connexion (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255)
    )`,
      [],
      (Sqltext, res) => {
        console.log(res);
      },
      (error) => {
        console.log("error" + error.message);
      }
    );
  });
};

useEffect(() => {
  createTables();
}, []);*/

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
    fontSize: 32,
    fontFamily: "cera-pro-black",
    marginTop: 80,
    marginBottom: 20,
  },
  image: {
    width: 175,
    height: 250,
    resizeMode: "contain",
    marginTop: 50,
  },
});
