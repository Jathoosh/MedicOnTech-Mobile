import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,

} from "../components/Sizer";

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
  }
});
