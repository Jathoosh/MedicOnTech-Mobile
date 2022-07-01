
import { View, Pressable, Text, StyleSheet } from "react-native";
import {
  widthPixel,
  heightPixel,
  fontPixel,


} from "./Sizer";
import { useNavigation } from "@react-navigation/native";

function Header(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ffffff", borderless: "true" }}
        style={styles.buttonOption}
        onPress={() => navigation.replace(props.nameGoBack)}
      >
        <Text style={styles.buttonOptionText}>Retour</Text>
      </Pressable>

      <Text style={styles.Text}>{props.nameTitle}</Text>

    </View>
  );
}

export default Header;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  Text: {
    fontFamily: "cera-pro-black",
    fontSize: fontPixel(28),
  },
  buttonOption: {
    width: widthPixel(80),
    height: heightPixel(40),
    backgroundColor: "#1e4edd",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginRight: widthPixel(20),
  },
  buttonOptionText: {
    fontSize: fontPixel(20),
    fontFamily: "cera-pro-medium",
    color: "#ffffff",
    padding: heightPixel(0),
  },

});
