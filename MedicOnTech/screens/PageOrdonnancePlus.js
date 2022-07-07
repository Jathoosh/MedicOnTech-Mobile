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
} from "../components/Sizer";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../Models/data";
import { useNetInfo } from "@react-native-community/netinfo";
import {
  getDataPrescription,
  setDataPrescription,
  updateDataPrescription,
} from "../server/Database";

const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
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
  while ((drugName[i>0?i-1:0] != "," || drugName[i] != " ") && i < drugName.length && drugName[i] != "+") {
    string += drugName[i];
    i++;
  }
  string = string.slice(0, -1);
  return string;
};
const GenerateBarCodeNumber = (prescription_ID) => {
  var barcode = prescription_ID.toString();
  while (barcode.length < 12) {
    barcode = "0" + barcode;
  }
  return (
    "http://bwipjs-api.metafloor.com/?bcid=ean13&text=" +
    barcode +
    "&includetext"
  );
};
function PageOrdonnancePlus({ route }) {
  const [isLoading, setLoading] = useState(true);
  const [otherData, setotherData] = useState([]);

  const netInfo = useNetInfo();

  const getPrescription = async (id) => {
    getDataPrescription(id)
      .then((data) => {
        setotherData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
    try {
      if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
        console.log("No internet connection");
      } else {
        const response = await axios.get(
          `${URL}/api/motapp/prescription/${id}`
        );

        const json = await response.data.result;
        json.forEach((element) => {
          if (element.Id_Person in data === false) {
            setDataPrescription(element, id);
          } else {
            updateDataPrescription(element);
          }
        });
        setotherData(json);
      }
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
        <Text style={styles.medicamentName}>
          💊 {shortenDrugName(itemData.item.drug_name)}
        </Text>
        <Text style={styles.medicamentName}>
          {" "}
          quantité : {itemData.item.quantity}
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
          source={{ uri: GenerateBarCodeNumber(data.Id_Prescription) }}
          style={styles.image}
        />
      </View>
      <View style={{ marginTop: heightPixel(30) }}>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Délivrée le : </Text>
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
              style={styles.flatList}
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
    marginLeft: widthPixel(20),
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
  flatList: {
    height: heightPixel(700),
  },
});
