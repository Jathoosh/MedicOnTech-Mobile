import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import DoctorItem from "../components/DoctorItem";
import { URL } from "../Models/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  getDataDoctors,
  setDataDoctors,
  updateDataDoctors,
} from "../server/Database";
import { useNetInfo } from "@react-native-community/netinfo";

function PageContactDoctor() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const netInfo = useNetInfo();

  const getDoctors = async (id) => {
    getDataDoctors()
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
    try {
      if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
        throw new Error("No internet connection");
      } else {
        const response = await axios.get(`${URL}/api/motapp/doctor/${id}`);

        const json = await response.data.result;
        json.forEach((element) => {
          if (element.Id_Person in data === false) {
            setDataDoctors(element);
          } else {
            updateDataDoctors(element);
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
    getDoctors(8);
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
