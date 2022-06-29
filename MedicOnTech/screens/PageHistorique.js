import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import OrdonnanceItem from "../components/OrdonnanceItem";
import { DATA } from "../Models/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
function PageHistorique() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getHistorique = async (id) => {
    try {
      const response = await axios.get(
        `http://10.3.200.21:3000/api/motapp/ordonnance/${id}`
      );
      const json = await response.data;
      setData(json.result);
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
