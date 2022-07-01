import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import OrdonnanceItem from "../components/OrdonnanceItem";
import { URL } from "../Models/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ID } from "../Models/data";


function PageHistorique() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getHistorique = async (id) => {
    try {

      const response = await axios.get(`${URL}/api/motapp/historique/${id}`);

      const json = await response.data;
      setData(json.result);
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
