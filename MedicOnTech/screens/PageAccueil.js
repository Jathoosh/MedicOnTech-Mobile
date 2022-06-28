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

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>MedicOnTech</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: pixelSizeVertical(100),
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
        <View style={{ marginTop: pixelSizeVertical(15) }} />
        <View style={styles.containerSubButton}>
          <Pressable android_ripple={{ color: "#FFFFFF" }} style={{ flex: 1 }}>
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
  },
  containerTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    elevation: 10,
    zIndex: 10,
    width: "100%",
    opacity: 0.8,
    backgroundColor: "#d9d9d9",
  },
  containerSubTitle: {
    marginTop: pixelSizeVertical(30),
    marginLeft: pixelSizeHorizontal(28),
  },
  containerImage: {
    marginTop: pixelSizeVertical(30),
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
    marginTop: pixelSizeVertical(37),
    marginLeft: pixelSizeHorizontal(20),
    marginBottom: pixelSizeVertical(15),
  },
  subTitle: {
    fontSize: fontPixel(28),
    fontFamily: "cera-pro-black",
    marginTop: pixelSizeVertical(0),
    marginLeft: pixelSizeHorizontal(0),
    marginBottom: pixelSizeVertical(0),
  },
  containerButton: {
    marginHorizontal: pixelSizeHorizontal(15),
    marginBottom: pixelSizeVertical(9),
    height: heightPixel(120), //130 sur le figma
    width: "auto",
    backgroundColor: "#2fb55e",
    borderRadius: 10,
    overflow: "hidden",
  },

  containerSubButton: {
    marginHorizontal: pixelSizeHorizontal(15),
    marginBottom: pixelSizeVertical(9),
    height: heightPixel(50),
    width: "auto",
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: fontPixel(22),
    fontFamily: "cera-pro-medium",
    marginLeft: pixelSizeHorizontal(12),
    marginTop: pixelSizeVertical(22),
    width: "80%",
  },
  buttonTitleHist: {
    fontSize: fontPixel(22),
    fontFamily: "cera-pro-medium",
    marginLeft: pixelSizeHorizontal(12),
    marginTop: pixelSizeVertical(22),
    width: "70%",
  },
  buttonDesc: {
    fontSize: fontPixel(18),
    fontFamily: "cera-pro-light",
    marginLeft: pixelSizeHorizontal(12),
    width: "70%",
  },
  buttonTitleSub: {
    fontSize: fontPixel(22),
    fontFamily: "cera-pro-medium",
    marginLeft: pixelSizeHorizontal(55),
    marginTop: pixelSizeVertical(10),
  },
  containerScroll: {
    width: "100%",
    height: "100%",
  },
});
