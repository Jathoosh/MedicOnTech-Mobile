import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  TextInput,
  Linking,
  Alert, 
  Button,
  
} from "react-native";

import { InAppBrowser } from 'react-native-inappbrowser-reborn'

import {
  widthPixel,
  heightPixel,
  fontPixel
} from "../components/Sizer";

import OrdonnanceItem from "../components/OrdonnanceItem";
import { URL } from "../Models/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ID } from "../Models/data";

import { theme } from "../Models/data";


async function openLink() {
  try {
    const url = 'https://www.google.com'
    if (true) {
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right'
        },
        headers: {
          'my-custom-header': 'my custom header value'
        }
      })
      Alert.alert(JSON.stringify(result))
    }
    else Linking.openURL('https://www.google.com')
  } catch (error) {
    Alert.alert(error.message)
  }
}


function PageOrdonnance() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  console.log(search);
  const getOrdonnances = async (id) => {
    try {

      const response = await axios.get(`${URL}/api/motapp/ordonnance/${id}`);

      const json = await response.data;
      setData(json.result);
      setSearch(json.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
          <Button title="Open link" onPress={openLink} />
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Rechercher une ordonnance"
            placeholderTextColor={theme.text}
            onChangeText={(text) => {
              setSearch(data.filter( item => item.patient_firstname.includes(text) 
              || item.patient_lastname.includes(text) 
              || item.doctor_firstname.includes(text)
              || item.doctor_lastname.includes(text)
              || item.creation_date.includes(text) ));
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
});
