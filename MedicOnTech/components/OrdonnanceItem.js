import { View, Pressable, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "./Sizer";

const months = [
  "janv.",
  "févr.",
  "mars",
  "avr.",
  "mai",
  "juin",
  "juill.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
];

const formatDate = (date) => {
  var tempDate = new Date(date);
  var string = tempDate.getDay().toString();
  string += " " + months[tempDate.getMonth()] + " ";
  string += tempDate.getFullYear().toString();
  return string;
};
const GenerateBarCodeNumber = (Id_Prescription) => {
  var barcode = Id_Prescription.toString();
  while (barcode.length < 12) {
      barcode = "0" + barcode;
  }
  return "http://bwipjs-api.metafloor.com/?bcid=ean13&text=" + barcode+"&includetext";
}
function OrdonnanceItem({ data, page }) {
  const navigation = useNavigation();
  function NavigateOrdonnance() {
    navigation.navigate("PageOrdonnancePlus", {data: data});
  }
  return (
    <View style={styles.container}>
      <Pressable
        onPress={NavigateOrdonnance}
        android_ripple={{ color: "#FFFFFF" }}
        style={{ flex: 1, borderRadius: 10 }}
      >
        {page === "historique" && (
          <Text style={[styles.buttonTitle, { marginBottom: pixelSizeVertical(10) }]}>
            {formatDate(data.creation_date)}
          </Text>
        )}
        {page === "ordonnance" && (
          <Text style={styles.buttonTitle}>
            {data.patient_firstname} {data.patient_lastname}
          </Text>
        )}

        <View
          style={{
            flexDirection: "row",
          }}
        >
          {page === "ordonnance" && (
            <Image
            source={{uri:GenerateBarCodeNumber(data.Id_Prescription)}}
              style={styles.image}
            />
          )}

          <View style={styles.innerText}>
            {page === "ordonnance" && (
              <Text style={styles.buttonDesc}>
                Délivré le : {"\n"}{formatDate(data.creation_date)}
              </Text>
            )}
            {page === "historique" && (
              <Text style={styles.buttonDesc}>
                {data.patient_lastname} {data.patient_firstname}
              </Text>
            )}

            <Text style={styles.buttonDesc}>
              Par : {data.doctor_firstname} {data.doctor_lastname}
            </Text>
          </View>
        </View>
        {page === "ordonnance" ? (
          <View style={styles.buttonDisplay}>
            <Text style={styles.textDisplay}>Afficher l'ordonnance</Text>
          </View>
        ) : (
          <View style={[styles.buttonDisplay, { marginTop: pixelSizeVertical(20) }]}>
            <Text style={styles.textDisplay}>Afficher l'ordonnance</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

export default OrdonnanceItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: pixelSizeVertical(20),
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
  },

  buttonTitle: {
    fontSize: fontPixel(28),
    fontFamily: "cera-pro-black",
    alignSelf: "center",
    marginTop: pixelSizeVertical(10),
  },
  buttonDesc: {
    fontSize: fontPixel(18),
    fontFamily: "cera-pro-medium",
  },
  buttonDisplay: {
    backgroundColor: "#1E4EDD",
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: heightPixel(40),
  },
  textDisplay: { color: "white", fontFamily: "cera-pro-medium", fontSize: fontPixel(18) },
  image: { width: widthPixel(150), height: heightPixel(105), resizeMode: "contain", marginLeft: pixelSizeHorizontal(15) },
  innerText: {
    paddingLeft: pixelSizeHorizontal(15),
    flex: 1,
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
  },
});
