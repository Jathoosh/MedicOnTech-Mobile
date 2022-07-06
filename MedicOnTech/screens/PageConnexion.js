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


} from "../components/Sizer";


import React, { useEffect, useState } from "react";
import ConnexionInput from "../components/ConnexionInput";

import { getDataSettings, setDataSettings, createTable } from "../server/Database";



function PageConnexion({ navigation }) {
  async function addConnexionHandler(isValid) {
    if (isValid === true) {

      navigation.replace("PageAccueil");
    }
  }

  const [settingData , setSettingData] = useState([]);
  const getSettings = async () => {
    getDataSettings()
      .then((data) => {
        setSettingData(data);
        console.log("data locales : ", data);
      })
      .catch((error) => console.log(error));
    if (settingData.length === 0) {
      setDataSettings({
        Id_Setting: 1,
        setting_name: "language",
        setting_value: "fr",
      });
      setDataSettings({
        Id_Setting: 2,
        setting_name: "theme",
        setting_value: "light",
      });
      getDataSettings()
        .then((data) => {
          setSettingData(data);
        })
    }
  }

  useEffect(() => {
    createTable();
    getSettings();
    
  }, []);
      
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
