import { View, Text, StyleSheet, Dimensions, PixelRatio, Pressable, Image, Linking } from "react-native";
import Header from "../components/Header";

import {
  widthPixel,
  heightPixel,
  fontPixel,


} from "../components/Sizer";

import { URL } from "../Models/data";

import * as WebBrowser from "expo-web-browser";

function PageContactUs() {

  const openLink = async (link) => {
    await WebBrowser.openBrowserAsync(link);
  };

  return (
    <View style={styles.container}>
      
      <View style={{marginTop: heightPixel(40)}}>
      <View style={styles.buttonOptionViewBlue}>
        <Pressable android_ripple={{color: "#ffffff", borderless: "true"}} style={styles.buttonOption} onPress={() => {Linking.openURL("mailto:team.medicontech@gmail.com")}}>
          <Image source={require("../assets/letter-white.png")} style={styles.image}/>
          <Text style={styles.buttonOptionText}>Nous contacter par email</Text>
        </Pressable>
      </View>
      <View style={styles.buttonOptionViewGray}>
        <Pressable android_ripple={{color: "#ffffff", borderless: "true"}} style={styles.buttonOption} onPress={() => {openLink(URL+"/#/contact")}}>
          <Image source={require("../assets/message.png")} style={styles.image}/>
          <Text style={styles.buttonOptionTextBlack}>Donnez votre avis</Text>
        </Pressable>
      </View>
      <View style={styles.buttonOptionViewGray}>
        <Pressable android_ripple={{color: "#ffffff", borderless: "true"}} style={styles.buttonOption} onPress={() => {openLink(URL+"/#/Faq")}}>
          <Image source={require("../assets/interogation.png")} style={styles.image}/>
          <Text style={styles.buttonOptionTextBlack}>Questions / Réponses</Text>
        </Pressable>
      </View>
      <View style={styles.buttonOptionViewGray}>
        <Pressable android_ripple={{color: "#ffffff", borderless: "true"}} style={styles.buttonOption} onPress={() => {openLink(URL+"/#/A_propos")}}>
          <Image source={require("../assets/lamp.png")} style={styles.image}/>
          <Text style={styles.buttonOptionTextBlack}>À propos</Text>
        </Pressable>
      </View>
      <View style={styles.containerSubTitle}>
        <Text style={styles.subTitle}>Réseaux sociaux</Text>
      </View>
      <View style={styles.containerSocialNetwork}>
        <Pressable style={styles.containerSocialNetworkItem} android_ripple={{color: "#ffffff", borderless: "true"}} onPress={() => {Linking.openURL("https://instagram.com/team.medicontech")}}>
          <Image source={require("../assets/Icone_instagram.png")} style={styles.imageSocialNetwork}/>
        </Pressable>
        <Pressable style={styles.containerSocialNetworkItem} android_ripple={{color: "#ffffff", borderless: "true"}} onPress={() => {Linking.openURL("https://www.linkedin.com/company/medicontech/")}}>
          <Image source={require("../assets/Icone_Linkedin.png")} style={styles.imageSocialNetwork}/>
        </Pressable>
        <Pressable style={styles.containerSocialNetworkItem} android_ripple={{color: "#ffffff", borderless: "true"}} onPress={() => {Linking.openURL("https://www.youtube.com/channel/UCmfFBwFw6xyORSaFwlfAgWg")}}>
          <Image source={require("../assets/Icone_youtube.png")} style={styles.imageSocialNetwork}/>
        </Pressable>
      </View>

      </View>

    </View>
  );
}

export default PageContactUs;

const styles = StyleSheet.create({
  buttonOption: {
    padding: heightPixel(5),
    borderless: "false",
    display: "flex", 
    flexDirection: "row",
    padding: widthPixel(12),
    
    

  },
  buttonOptionViewBlue:{
    marginTop: heightPixel(15),
    backgroundColor: "#1e4edd",
    borderRadius: 20, 
    overflow: 'hidden',
    width: widthPixel(340),
    alignSelf: "center",
  },
  buttonOptionViewGray:{
    marginTop: heightPixel(15),
    backgroundColor: "#d9d9d9",
    borderRadius: 20, 
    overflow: 'hidden',
    width: widthPixel(340),
    alignSelf: "center",
  },
  buttonOptionText: {
    width: "100%",
    fontSize: fontPixel(22),
    fontFamily: "cera-pro-medium",
    color: "#ffffff",
    padding: heightPixel(0),
    marginLeft: widthPixel(10),
  },
  buttonOptionTextBlack: {
    width: "100%",
    fontSize: fontPixel(22),
    fontFamily: "cera-pro-medium",
    color: "#000000",
    padding: heightPixel(0),
    marginLeft: widthPixel(10),
  },
  image:{
    width: widthPixel(30),
    height: heightPixel(30),
  },

  subTitle: {
    fontSize: fontPixel(28),
    fontFamily: "cera-pro-black",
    marginTop: heightPixel(0),
    marginLeft: widthPixel(0),
    marginBottom: heightPixel(0),
  },

  containerSubTitle: {
    marginTop: heightPixel(30),
    marginLeft: widthPixel(20),
  },
  containerSocialNetwork: {
    marginTop: heightPixel(20),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  containerSocialNetworkItem: {
    width: widthPixel(64),
    height: heightPixel(64),
    margin: widthPixel(10),

  },
  imageSocialNetwork: {
    width: widthPixel(64),
    height: widthPixel(64),
  },

      

});
