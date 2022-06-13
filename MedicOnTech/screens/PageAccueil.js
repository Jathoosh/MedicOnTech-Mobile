import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";


function PageAccueil() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>MedicOnTech</Text>
      </View>
      <View style={styles.containerImage}>
      <Image
          source={require("../assets/Logo_application.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}
export default PageAccueil;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    containerTitle: {
      opacity: 0.8,
      backgroundColor: "#d9d9d9",
      

    },
    containerImage: {
      alignItems: "center",
      borderWidth: 1,
      borderColor: "black",
    },
    textConnexion: { fontSize: 32 },
    image: {
      marginTop: 30,
      width: 400,
      height: 400,
      resizeMode: "contain",
    },
    title:{
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 37,
        marginLeft: 20,
        marginBottom: 15,
    }
  });