import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
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

function PageHistorique() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
    getHistorique(8);
  }, []);

  function renderHistoriqueItem(itemData) {
    return <OrdonnanceItem data={itemData.item} page={"historique"} />;
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : (
        <FlatList
          data={data}
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
});
