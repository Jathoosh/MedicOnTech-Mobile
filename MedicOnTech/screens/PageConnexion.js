import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";

import {
  widthPixel,
  heightPixel,
  fontPixel,


} from "../components/Sizer";

import axios from "axios";
import { URL } from "../Models/data";

import { createDevice, setDevice, getDevice, deleteTables } from "../server/Database";

import ConnexionInput from "../components/ConnexionInput";

import * as WebBrowser from "expo-web-browser";




function PageConnexion({ navigation }) {

  const openLink = async (link) => {
    await WebBrowser.openBrowserAsync(link);
  };

  async function firstAuth(){
    createDevice();
    const response = await axios.get(`${URL}/api/motapp/getdeviceid`);
    const json = await response.data;
    setDevice(json.result).then(() => {
      console.log("Device created");
      getDevice().then((data) => {
        console.log(data);
      });
    });
    openLink(`${URL}/api/motapp/first_time/${json.result}`);
    console.log("sup");
    
  }
  //deleteTables()
  getDevice().then ((data) => {
    if (data === undefined) {
      console.log("Device not found");
      firstAuth();
    }
  });/**/
  async function connexionHandler() {
    getDevice().then((data) => {
      axios.post(`${URL}/api/motapp/connexion`, {device_id: data[0].Id_Device}).then((response) => {
        const json = response.data;
        console.log(json);
      });
    });
  };
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
      <View Style={styles.containerButton}>
        <Pressable onPress={connexionHandler}>
          <View style={styles.button}>
            <Text style={styles.text}>
              Connexion
            </Text>
          </View>
        </Pressable>
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
    width: widthPixel(175),
    height: heightPixel(250),
    resizeMode: "contain",
    marginTop: heightPixel(50),
  },
  containerButton: {
    alignItems: "center",
    marginBottom: heightPixel(50),
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#2FB55E",
    alignItems: "center",
    justifyContent: "center",
    height: heightPixel(54),
  },
  text: {
    fontSize: fontPixel(24),
    fontFamily: "cera-pro-medium",
  },
});
