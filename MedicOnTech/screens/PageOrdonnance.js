import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  TextInput,
  Pressable,
} from "react-native";

import { widthPixel, heightPixel, fontPixel } from "../components/Sizer";

import OrdonnanceItem from "../components/OrdonnanceItem";
import { URL } from "../Models/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNetInfo } from "@react-native-community/netinfo";
import {
  getDataOrdonnance,
  setDataOrdonnance,
  updateDataOrdonnace,
} from "../server/Database";
import { ID } from "../Models/data";

import { theme } from "../Models/data";

function PageOrdonnance() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const netInfo = useNetInfo();

  const [search, setSearch] = useState([]);
  const [chargeText, setChargeText] = useState(
    "Voir les ordonnances de mes personnes à charge"
  );
  const [charge, setCharge] = useState(false);

  const getOrdonnances = async (id) => {
    getDataOrdonnance()
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
    try {
      if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
        console.log("No internet connection");
      } else {
        const response = await axios.get(`${URL}/api/motapp/ordonnance/${id}`);

        const json = await response.data.result;
        json.forEach((element) => {
          if (element.Id_Person in data === false) {
            setDataOrdonnance(element);
          } else {
            updateDataOrdonnace(element);
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

  const getOrdonnancesSecond = async (id) => {
    try {
      setData([]);
      setSearch([]);
      var result = [];
      const responseChargePersonnes = await axios.get(
        `${URL}/api/motapp/charge/${id}`
      );
      const jsonChargePersonnes = await responseChargePersonnes.data.result;
      for (let i = 0; i < jsonChargePersonnes.length; i++) {
        const response = await axios.get(
          `${URL}/api/motapp/ordonnance/${jsonChargePersonnes[i].Id_Patient}`
        );
        const json = await response.data;
        result = result.concat(json.result);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setData(result);
      setSearch(result);
      setLoading(false);
    }
  };

  const getOrdonnanceOption = () => {
    if (charge) {
      setCharge(!charge);
      setChargeText("Voir les ordonnances de mes personnes à charge");
      getOrdonnances(ID);
    } else {
      setCharge(!charge);
      setChargeText("Voir mes ordonnances");
      getOrdonnancesSecond(ID);
    }
  };

  useEffect(() => {
    getOrdonnances(ID);
  }, []);

  function renderOrdonnanceItem(itemData) {
    return <OrdonnanceItem data={itemData.item} page={"ordonnance"} />;
  }

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Pressable onPress={getOrdonnanceOption} style={styles.buttonOption}>
            <Text style={styles.buttonOptionText}>{chargeText}</Text>
          </Pressable>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Rechercher une ordonnance"
            placeholderTextColor={theme.text}
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
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : (
        <FlatList
          data={search}
          keyExtractor={(item) => item.Id_Prescription}
          renderItem={renderOrdonnanceItem}
          style={styles.list}
        />
      )}
    </View>
  );
}

export default PageOrdonnance;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
  },
  textInput: {
    alignItems: "stretch",
    height: heightPixel(54),
    backgroundColor: theme.subButton,
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
  buttonOption: {
    marginTop: heightPixel(10),
    marginLeft: widthPixel(20),
    paddingLeft: widthPixel(15),
    paddingRight: widthPixel(15),
    height: heightPixel(60),
    backgroundColor: "#1e4edd",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginRight: widthPixel(20),
  },
  buttonOptionText: {
    fontSize: fontPixel(18),
    fontFamily: "cera-pro-medium",
    color: "#ffffff",
    textAlign: "center",
  },
});
