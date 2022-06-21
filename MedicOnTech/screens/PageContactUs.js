import { View, Text, StyleSheet, Dimensions, PixelRatio, Pressable, Image, Linking } from "react-native";
import Header from "../components/Header";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const widthBaseScale = SCREEN_WIDTH / 384;
const heightBaseScale = SCREEN_HEIGHT / 816;

function normalize(size, based = "width") {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width pixel
const widthPixel = (size) => {
  return normalize(size, "width");
};
//for height pixel
const heightPixel = (size) => {
  return normalize(size, "height");
};
//for font pixel
const fontPixel = (size) => {
  return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
};
export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};

function RenderHeader(){
  return (
    <Header title={"Contactez-nous"} />
  );
}

function PageContactUs() {
  return (
    <View style={styles.container}>
      {RenderHeader()}
      <View style={{marginTop: pixelSizeVertical(110)}}>
      <View style={styles.buttonOptionViewBlue}>
        <Pressable android_ripple={{color: "#ffffff", borderless: "true"}} style={styles.buttonOption} >
          <Image source={require("../assets/letter-white.png")} style={styles.image}/>
          <Text style={styles.buttonOptionText}>Nous contacter par email</Text>
        </Pressable>
      </View>
      <View style={styles.buttonOptionViewGray}>
        <Pressable android_ripple={{color: "#ffffff", borderless: "true"}} style={styles.buttonOption} >
          <Image source={require("../assets/message.png")} style={styles.image}/>
          <Text style={styles.buttonOptionTextBlack}>Donnez votre avis</Text>
        </Pressable>
      </View>
      <View style={styles.buttonOptionViewGray}>
        <Pressable android_ripple={{color: "#ffffff", borderless: "true"}} style={styles.buttonOption} >
          <Image source={require("../assets/interogation.png")} style={styles.image}/>
          <Text style={styles.buttonOptionTextBlack}>Questions / Réponses</Text>
        </Pressable>
      </View>
      <View style={styles.buttonOptionViewGray}>
        <Pressable android_ripple={{color: "#ffffff", borderless: "true"}} style={styles.buttonOption} >
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
    padding: pixelSizeVertical(5),
    borderless: "false",
    display: "flex", 
    flexDirection: "row",
    padding: pixelSizeHorizontal(12),
    
    

  },
  buttonOptionViewBlue:{
    marginTop: pixelSizeVertical(15),
    backgroundColor: "#1e4edd",
    borderRadius: 20, 
    overflow: 'hidden',
    width: pixelSizeHorizontal(340),
    alignSelf: "center",
  },
  buttonOptionViewGray:{
    marginTop: pixelSizeVertical(15),
    backgroundColor: "#d9d9d9",
    borderRadius: 20, 
    overflow: 'hidden',
    width: pixelSizeHorizontal(340),
    alignSelf: "center",
  },
  buttonOptionText: {
    width: "100%",
    fontSize: fontPixel(22),
    fontFamily: "cera-pro-medium",
    color: "#ffffff",
    padding: pixelSizeVertical(0),
    marginLeft: pixelSizeHorizontal(10),
  },
  buttonOptionTextBlack: {
    width: "100%",
    fontSize: fontPixel(22),
    fontFamily: "cera-pro-medium",
    color: "#000000",
    padding: pixelSizeVertical(0),
    marginLeft: pixelSizeHorizontal(10),
  },
  image:{
    width: widthPixel(30),
    height: heightPixel(30),
  },

  subTitle: {
    fontSize: fontPixel(28),
    fontFamily: "cera-pro-black",
    marginTop: pixelSizeVertical(0),
    marginLeft: pixelSizeHorizontal(0),
    marginBottom: pixelSizeVertical(0),
  },

  containerSubTitle: {
    marginTop: pixelSizeVertical(30),
    marginLeft: pixelSizeHorizontal(20),
  },
  containerSocialNetwork: {
    marginTop: pixelSizeVertical(20),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  containerSocialNetworkItem: {
    width: widthPixel(64),
    height: heightPixel(64),
    margin: pixelSizeHorizontal(10),

  },
  imageSocialNetwork: {
    width: widthPixel(64),
    height: heightPixel(64),
  },

      

});
