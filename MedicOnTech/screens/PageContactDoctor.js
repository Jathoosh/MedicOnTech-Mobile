import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import DoctorItem from "../components/DoctorItem";
import { DOCTOR } from "../Models/data";
import React, { useEffect, useState } from "react";
function PageContactDoctor() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "http://10.13.200.233:3000/api/motapp/doctor",
        {
          method: "GET",
        }
      );
      const json = await response.json();
      setData(json.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  function renderDoctorItem(itemData) {
    return <DoctorItem data={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.Id_Person}
          renderItem={renderDoctorItem}
          style={styles.list}
        />
      )}
    </View>
  );
}

export default PageContactDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
