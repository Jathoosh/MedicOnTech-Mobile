import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,

} from "../components/Sizer";

import { ORDONNANCE_MEDICAMENT } from "../Models/data";
import { ORDONNANCE_SERVICE } from "../Models/data";
import { MEDICAMENT } from "../Models/data";
import { SERVICE } from "../Models/data";

const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

const formatDate = (date) => {
  var tempDate = new Date(date);
  var string = tempDate.getDay().toString();
  string += " "+months[tempDate.getMonth()]+" ";
  string += tempDate.getFullYear().toString()
  return string;
};


function PageOrdonnancePlus({ route }) {
  const { data } = route.params;


  const filtered_pres_med = ORDONNANCE_MEDICAMENT.filter((dataItem) => {
    return dataItem.Id_prescription === data.id;
  });
  const filtered_pres_serv = ORDONNANCE_SERVICE.filter((dataItem) => {
    return dataItem.Id_prescription === data.id;
  });
  



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{data.personne}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/Code128-alphanumeric.jpg")} style={styles.image}/>
        
      </View>
      <View style={{marginTop: 30}}>
      <View style={styles.textContainer}>
        <Text style={styles.boldText}>Délivré le : </Text>
        <Text style={styles.normalText}>{formatDate(data.dateDelivre)}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.boldText}>Par : </Text>
        <Text style={styles.normalText}>{data.docteur}</Text>
      </View>
      <View>
        <Text style={styles.contentTitle}>Contenu : </Text>
        <FlatList
          data={filtered_pres_med}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.medicamentContainer}>
                <Text style={styles.medicamentName}>💊 {MEDICAMENT[item.Id_medicament-1].drug_name}</Text>
                <Text style={styles.medicamentQuantity}> - {item.quantity}</Text>
              </View>
            );
          }
          }

        />
        <FlatList
          data={filtered_pres_serv}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <View style={styles.medicamentContainer}>
                <Text style={styles.medicamentName}>🏥 {SERVICE[item.Id_service-1].service_name}</Text>
                <Text style={styles.medicamentQuantity}> - {item.quantity}</Text>
              </View>
            );
          }
          }

        />
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
    fontSize: 34,
    fontFamily: "cera-pro-black",
    alignSelf: "center",
    marginTop: 10,
  },
  image: {
    width: widthPixel(300), 
    height: heightPixel(200),
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: 45,
    alignSelf: "center"
  },
  textContainer: {
    marginTop: 5,
    marginLeft: 40,
    display: "flex",
    flexDirection: "row", 
  },
  boldText: {
    fontFamily: "cera-pro-bold",
    fontSize: 18,
  },
  normalText: {
    fontFamily: "cera-pro-medium",
    fontSize: 18,
  },
  medicamentContainer: {
    marginTop: 5,
    marginLeft: 40,
    display: "flex",
    flexDirection: "row",
    
  },
  medicamentName: {
    fontFamily: "cera-pro-medium",
    fontSize: 18,
  },
  medicamentQuantity: {
    fontFamily: "cera-pro-medium",
    fontSize: 18,
    
  },
  contentTitle: {
    fontFamily: "cera-pro-black",
    fontSize: 18,
    marginLeft: 40,
    marginTop: 20,
  }


});
