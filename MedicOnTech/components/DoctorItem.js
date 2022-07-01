import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Linking,
} from "react-native";

import {
  widthPixel,
  heightPixel,
  fontPixel,

} from "./Sizer";

function OrdonnanceItem({ data }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.buttonTitle}>
          {data.first_name} {data.last_name}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.buttonDesc}>numéro : {data.phone}</Text>
            <Text style={styles.buttonDesc}>email : {data.email_address}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Pressable
            onPress={() => {
              Linking.openURL("tel:" + data.phone);
            }}
            android_ripple={{ color: "#FFFFFF" }}
            style={styles.buttonOption}
          >
            <Image
              source={require("../assets/phone.png")}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Appeler</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              Linking.openURL("mailto:" + data.email_address);
            }}
            android_ripple={{ color: "#FFFFFF" }}
            style={styles.buttonOption}
          >
            <Image
              source={require("../assets/letter-white.png")}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Envoyer un email</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default OrdonnanceItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: heightPixel(10),
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    padding: heightPixel(10),
  },

  buttonTitle: {
    fontSize: fontPixel(28),
    fontFamily: "cera-pro-black",
    alignSelf: "center",
    textAlign: "center",

    width: "100%",
  },
  buttonDesc: {
    fontSize: fontPixel(18),
    fontFamily: "cera-pro-light",
    marginTop: heightPixel(5),
    width: "100%",
  },
  buttonOption: {
    display: "flex",
    flexDirection: "row",
    marginTop: heightPixel(10),
    padding: heightPixel(10),
    backgroundColor: "#1e4edd",
    borderRadius: 13,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: fontPixel(18),
    fontFamily: "cera-pro-light",
  },
  buttonIcon: {
    width: widthPixel(25),
    height: heightPixel(25),
    marginRight: widthPixel(10),
    marginLeft: widthPixel(2),
  },
});
