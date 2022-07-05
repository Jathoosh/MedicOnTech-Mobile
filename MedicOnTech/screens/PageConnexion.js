import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button,
} from "react-native";

import React, { useEffect, useState } from "react";


import {
  widthPixel,
  heightPixel,
  fontPixel,


} from "../components/Sizer";

import ConnexionInput from "../components/ConnexionInput";
import * as WebBrowser from 'expo-web-browser';

function PageConnexion({ navigation }) {
  async function addConnexionHandler(isValid) {
    if (isValid === true) {
      navigation.replace("PageAccueil");
    }
  }

  const [result, setResult] = useState(null);
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openAuthSessionAsync('https://google.com');
    setResult(result);
  };


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
