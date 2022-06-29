import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../components/Sizer";

import React, { useEffect, useState } from "react";
import axios from "axios";

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

const shortenDrugName = (drugName) => {
  var string = "";
  var i = 0;
  while (drugName[i] != "," && i < drugName.length) {
    string += drugName[i];
    i++;
  }
  return string;
}

function PageOrdonnancePlus({ route }) {
  const [isLoading, setLoading] = useState(true);
  const [otherData, setotherData] = useState([]);

  const getPrescription = async (id) => {
    try {
      const response = await axios.get(
        `http://10.3.200.21:3000/api/motapp/prescription/${id}`
      );
      const json = await response.data;
      setotherData(json.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPrescription(data.Id_Prescription);
  }, []);

  const { data } = route.params;

  function renderPrescriptionDrugItem(itemData) {
    return (
      <View style={styles.medicamentContainer}>
        <Text style={styles.medicamentName}>💊 {shortenDrugName(itemData.item.drug_name)}</Text>
        <Text style={styles.medicamentName}>        quantité : {itemData.item.quantity}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>
          {" "}
          {data.patient_firstname} {data.patient_lastname}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{uri:"http://bwipjs-api.metafloor.com/?bcid=code39&text="+data.Id_Prescription+"&includetext"}}
          style={styles.image}
        />
      </View>
      <View style={{ marginTop: heightPixel(30) }}>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Délivré le : </Text>
          <Text style={styles.normalText}>
            {formatDate(data.creation_date)}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Par : </Text>
          <Text style={styles.normalText}>
            {data.doctor_firstname} {data.doctor_lastname}
          </Text>
        </View>
        <View>
          <Text style={styles.contentTitle}>Contenu : </Text>
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              data={otherData}
              keyExtractor={(item) => item.Id_Drug}
              renderItem={renderPrescriptionDrugItem}
            />
          )}
        </View>
      </View>
    </View>
  );
}

export default PageOrdonnancePlus;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  name: {
    textAlign: "center",
    fontSize: fontPixel(34),
    fontFamily: "cera-pro-black",
    alignSelf: "center",
    marginTop: heightPixel(10),
  },
  image: {
    width: widthPixel(300),
    height: heightPixel(200),
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: heightPixel(20),
    alignSelf: "center",
  },
  textContainer: {
    marginTop: heightPixel(5),
    marginLeft: widthPixel(40),
    display: "flex",
    flexDirection: "row",
  },
  boldText: {
    fontFamily: "cera-pro-bold",
    fontSize: fontPixel(18),
  },
  normalText: {
    fontFamily: "cera-pro-medium",
    fontSize: fontPixel(18),
  },
  medicamentContainer: {
    flexWrap: "wrap",
    marginTop: heightPixel(5),
    marginLeft: pixelSizeHorizontal(20),
    display: "flex",
    flexDirection: "column",
  },
  medicamentName: {
    fontFamily: "cera-pro-medium",
    fontSize: fontPixel(18),
  },
  medicamentQuantity: {
    fontFamily: "cera-pro-medium",
    fontSize: fontPixel(18),
  },
  contentTitle: {
    fontFamily: "cera-pro-black",
    fontSize: fontPixel(18),
    marginLeft: widthPixel(40),
    marginTop: heightPixel(20),
  },
});
