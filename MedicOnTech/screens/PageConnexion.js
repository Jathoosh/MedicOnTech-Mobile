import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button,
} from "react-native";

import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  widthPixel,
  heightPixel,
  fontPixel,


} from "../components/Sizer";

import ConnexionInput from "../components/ConnexionInput";
import * as WebBrowser from 'expo-web-browser';
//import DeviceInfo from 'react-native-device-info';

function PageConnexion({ navigation }) {
  async function addConnexionHandler(isValid) {
    if (isValid === true) {
      navigation.replace("PageAccueil");
    }
  }
  //const id_phone = DeviceInfo.getUniqueId();
  //console.log(id_phone);
  const [result, setResult] = useState(null);
  /*
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openAuthSessionAsync('http://10.23.201.19:3030/#/mobile_login/' + id_phone);
    if (result.type === 'dismiss') {
      const res = await axios.get('http://10.23.201.19:3030/api/motapp/checkconnexion');
      setResult(res.data);

    }
  };*/


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{marginTop: 40}}>
          <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
          <Text>{result && JSON.stringify(result)}</Text>
      </View>
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
    width: widthPixel(175),
    height: heightPixel(250),
    resizeMode: "contain",
    marginTop: heightPixel(50),
  },
});
