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
import { URL } from "../App";

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

function PageOrdonnancePlus({ route }) {
  const [isLoading, setLoading] = useState(true);
  const [otherData, setotherData] = useState([]);

  const getPrescription = async (id) => {
    try {
      const response = await axios.get(`${URL}/api/motapp/prescription/${id}`);
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
        <Text style={styles.medicamentName}>💊 {itemData.item.drug_name}</Text>
        <Text style={styles.medicamentQuantity}>
          {" "}
          - {itemData.item.quantity}
        </Text>
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
          source={require("../assets/Code128-alphanumeric.jpg")}
          style={styles.image}
        />
      </View>
      <View style={{ marginTop: 30 }}>
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
    fontSize: 34,
    fontFamily: "cera-pro-black",
    alignSelf: "center",
    marginTop: 10,
  },
  image: {
    width: widthPixel(300),
    height: heightPixel(200),
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: 45,
    alignSelf: "center",
  },
  textContainer: {
    marginTop: 5,
    marginLeft: 40,
    display: "flex",
    flexDirection: "row",
  },
  boldText: {
    fontFamily: "cera-pro-bold",
    fontSize: 18,
  },
  normalText: {
    fontFamily: "cera-pro-medium",
    fontSize: 18,
  },
  medicamentContainer: {
    flexWrap: "wrap",
    marginTop: 5,
    marginLeft: 40,
    display: "flex",
    flexDirection: "row",
  },
  medicamentName: {
    fontFamily: "cera-pro-medium",
    fontSize: 18,
  },
  medicamentQuantity: {
    fontFamily: "cera-pro-medium",
    fontSize: 18,
  },
  contentTitle: {
    fontFamily: "cera-pro-black",
    fontSize: 18,
    marginLeft: 40,
    marginTop: 20,
  },
});
