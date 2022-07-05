import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import OrdonnanceItem from "../components/OrdonnanceItem";
import { URL } from "../Models/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNetInfo } from "@react-native-community/netinfo";
import {
  getDataHistorique,
  setDataHistorique,
  updateDataHistorique,
} from "../server/Database";
import { ID } from "../Models/data";

import { widthPixel, heightPixel, fontPixel } from "../components/Sizer";

function PageHistorique() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  const netInfo = useNetInfo();

  const getHistorique = async (id) => {
    getDataHistorique()
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
    try {
      if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
        console.log("No internet connection");
      } else {
        const response = await axios.get(`${URL}/api/motapp/historique/${id}`);

        const json = await response.data.result;
        json.forEach((element) => {
          if (element.Id_Person in data === false) {
            setDataHistorique(element);
          } else {
            updateDataHistorique(element);
          }
        });
        setData(json);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistorique(ID);
  }, []);

  function renderHistoriqueItem(itemData) {
    return <OrdonnanceItem data={itemData.item} page={"historique"} />;
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Rechercher une ordonnance"
          onChangeText={(text) => {
            setSearch(
              data.filter(
                (item) =>
                  item.patient_firstname.includes(text) ||
                  item.patient_lastname.includes(text) ||
                  item.doctor_firstname.includes(text) ||
                  item.doctor_lastname.includes(text) ||
                  item.creation_date.includes(text)
              )
            );
          }}
          clearButtonMode="always"
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : (
        <FlatList
          data={search}
          keyExtractor={(item) => item.Id_Prescription}
          renderItem={renderHistoriqueItem}
          style={styles.list}
        />
      )}
    </View>
  );
}

export default PageHistorique;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  textInput: {
    alignItems: "stretch",
    height: heightPixel(54),
    backgroundColor: "#D9D9D9",
    paddingLeft: widthPixel(15),
    borderRadius: 10,
    marginLeft: widthPixel(20),
    marginRight: widthPixel(20),
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
    fontFamily: "cera-pro-medium",
    letterSpacing: 1,
    overflow: "hidden",
  },
});
