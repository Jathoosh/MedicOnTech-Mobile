import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";

import OrdonnanceItem from "../components/OrdonnanceItem";
import { URL } from "../Models/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
function PageOrdonnance() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getOrdonnances = async (id) => {
    try {

      const response = await axios.get(`${URL}/api/motapp/ordonnance/${id}`);

      const json = await response.data;
      setData(json.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrdonnances(8);
  }, []);

  function renderOrdonnanceItem(itemData) {
    return <OrdonnanceItem data={itemData.item} page={"ordonnance"} />;
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : (
        <FlatList
          data={data}
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
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
  },
});
