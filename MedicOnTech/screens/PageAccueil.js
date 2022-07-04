import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  PixelRatio,
  Dimensions,
  Linking,
} from "react-native";


//get every settings
import AsyncStorage from '@react-native-async-storage/async-storage';

var Settings;

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('Settings')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e);
  }
}

getData().then(data => {
  console.log(data);
  Settings = data;
}
);


console.log(Settings);
import { light_theme, dark_theme } from "../Models/data";
//var theme = (Settings.theme === "light") ? light_theme : dark_theme;
import { theme } from "../Models/data";

//end
import {
  widthPixel,
  heightPixel,
  fontPixel,
} from "../components/Sizer";

const url = "https://www.google.fr/maps/search/pharmacie";

function PageAccueil({ navigation }) {
  function NavigateOrdonnance() {
    navigation.navigate("PageOrdonnance");
  }
  function NavigateHistorique() {
    navigation.navigate("PageHistorique");
  }
  function NavigateContactDoctor() {
    navigation.navigate("PageContactDoctor");
  }
  function NaviagateContactUs() {
    navigation.navigate("PageContactUs");
    console.log("PageContactUs");
  }
  function NavigateParametres() {
    navigation.navigate("PageParametres");
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>MedicOnTech</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: heightPixel(100),
        }}
      >
        <View style={styles.containerImage}>
          <Image source={require("../assets/logo.png")} style={styles.image} />
        </View>
        <View>
          <View style={styles.containerSubTitle}>
            <Text style={styles.subTitle}>Mes ordonnances</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              onPress={NavigateOrdonnance}
              android_ripple={{ color: "#FFFFFF" }}
              style={{ flex: 1 }}
            >
              <View>
                <Text style={styles.buttonTitle}>Ordonnances valides</Text>
                <Text style={styles.buttonDesc}>
                  Appuyez pour trouver vos ordonnances valides
                </Text>
              </View>

              <View
                style={{
                  height: heightPixel(120),
                  position: "absolute",
                  top: 0,
                  left: "70%",
                }}
              >
                <Image
                  source={require("../assets/ordonnance.png")}
                  style={{
                    width: widthPixel(100),
                    height: heightPixel(120),
                    resizeMode: "contain",
                  }}
                />
              </View>
            </Pressable>
          </View>

          <View style={styles.containerButton}>
            <Pressable
              onPress={NavigateHistorique}
              android_ripple={{ color: "#FFFFFF" }}
              style={{ flex: 1 }}
            >
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.buttonTitleHist}>Mon historique</Text>
                <Text style={styles.buttonDesc}>
                  Appuyez pour consulter l'historique de vos ordonnances
                </Text>
              </View>
              <View
                style={{
                  height: heightPixel(120),
                  position: "absolute",
                  top: 0,
                }}
              >
                <Image
                  source={require("../assets/ordonnance.png")}
                  style={{
                    width: widthPixel(100),
                    height: heightPixel(120),
                    resizeMode: "contain",
                  }}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={styles.containerSubTitle}>
            <Text style={styles.subTitle}>Autre</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              onPress={() => {
                Linking.openURL(url);
              }}
              android_ripple={{ color: "#FFFFFF" }}
              style={{ flex: 1 }}
            >
              <Text style={styles.buttonTitle}>Trouver une pharmacie</Text>
              <Text style={styles.buttonDesc}>
                Appuyez pour trouver une pharmacie proche de moi
              </Text>
              <View
                style={{
                  height: heightPixel(120),
                  position: "absolute",
                  top: 15,
                  left: "72%",
                }}
              >
                <Image
                  source={require("../assets/map.png")}
                  style={{
                    width: widthPixel(100),
                    height: heightPixel(120),
                    resizeMode: "contain",
                  }}
                />
              </View>
            </Pressable>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              onPress={NavigateContactDoctor}
              android_ripple={{ color: "#FFFFFF" }}
              style={{ flex: 1 }}
            >
              <Text style={styles.buttonTitle}>Contacter mon medecin</Text>
              <Text style={styles.buttonDesc}>
                Appuyez pour contacter l'un de mes medecins
              </Text>
              <View
                style={{
                  height: heightPixel(120),
                  position: "absolute",
                  top: 0,
                  left: "72%",
                }}
              >
                <Image
                  source={require("../assets/medecin.png")}
                  style={{
                    width: widthPixel(100),
                    height: heightPixel(120),
                    resizeMode: "contain",
                  }}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={{ marginTop: heightPixel(15) }} />
        <View style={styles.containerSubButton}>
          <Pressable  onPress={NavigateParametres} android_ripple={{ color: "#FFFFFF" }} style={{ flex: 1 }}>
            <Text style={styles.buttonTitleSub}>Paramètres</Text>
            <View
              style={{ height: heightPixel(50), position: "absolute", top: 0 }}
            >
              <Image
                source={require("../assets/engrenage.png")}
                style={{
                  width: widthPixel(50),
                  height: heightPixel(50),
                  resizeMode: "contain",
                }}
              />
            </View>
          </Pressable>
        </View>
        <View style={styles.containerSubButton}>
          <Pressable onPress={NaviagateContactUs} android_ripple={{ color: "#FFFFFF" }} style={{ flex: 1 }}>
            <Text style={styles.buttonTitleSub}>Nous contacter</Text>

            <View
              style={{ height: heightPixel(50), position: "absolute", top: 0 }}
            >
              <Image
                source={require("../assets/lettre.png")}
                style={{
                  width: widthPixel(50),
                  height: heightPixel(50),
                  resizeMode: "contain",
                }}
              />
            </View>
          </Pressable>
        </View>
        <View style={{ height: heightPixel(100) }} />
      </ScrollView>
    </View>
  );
}
export default PageAccueil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  containerTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    elevation: 10,
    zIndex: 10,
    width: "100%",
    opacity: 0.8,
    backgroundColor: theme.headerBackground,
  },
  containerSubTitle: {
    marginTop: heightPixel(30),
    marginLeft: widthPixel(28),
  },
  containerImage: {
    marginTop: heightPixel(30),
    height: heightPixel(150),
    alignItems: "center",
  },
  textConnexion: { fontSize: fontPixel(32) },
  image: {
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: fontPixel(32),
    fontFamily: "cera-pro-black",
    color: theme.text,
    marginTop: heightPixel(37),
    marginLeft: widthPixel(20),
    marginBottom: heightPixel(15),
  },
  subTitle: {
    fontSize: fontPixel(28),
    fontFamily: "cera-pro-black",
    color: theme.text,
    marginTop: heightPixel(0),
    marginLeft: widthPixel(0),
    marginBottom: heightPixel(0),
  },
  containerButton: {
    marginHorizontal: widthPixel(15),
    marginBottom: heightPixel(9),
    height: heightPixel(120), //130 sur le figma
    width: "auto",
    backgroundColor: theme.button,
    borderRadius: 10,
    overflow: "hidden",
  },

  containerSubButton: {
    marginHorizontal: widthPixel(15),
    marginBottom: heightPixel(9),
    height: heightPixel(50),
    width: "auto",
    backgroundColor: theme.subButton,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: fontPixel(22),
    fontFamily: "cera-pro-medium",
    color: theme.text,
    marginLeft: widthPixel(12),
    marginTop: heightPixel(22),
    width: "80%",
  },
  buttonTitleHist: {
    fontSize: fontPixel(22),
    fontFamily: "cera-pro-medium",
    color: theme.text,
    marginLeft: widthPixel(12),
    marginTop: heightPixel(22),
    width: "70%",
  },
  buttonDesc: {
    fontSize: fontPixel(18),
    fontFamily: "cera-pro-light",
    color: theme.text,
    marginLeft: widthPixel(12),
    width: "70%",
  },
  buttonTitleSub: {
    fontSize: fontPixel(22),
    fontFamily: "cera-pro-medium",
    color: theme.text,
    marginLeft: widthPixel(55),
    marginTop: heightPixel(10),
  },
  containerScroll: {
    width: "100%",
    height: "100%",
  },
});
