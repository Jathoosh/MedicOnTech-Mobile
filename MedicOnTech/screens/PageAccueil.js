import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Pressable,
} from "react-native";


function PageAccueil() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>MedicOnTech</Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 100 }}>
        <View style={styles.containerImage}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.image}
          />
        </View>
        <View>
        <View style={styles.containerSubTitle}>
          <Text style={styles.subTitle}>Mes ordonnances</Text>
        </View>
        <Pressable>
          <View style={styles.containerButton}>
            <Text style={styles.buttonTitle}>Ordonnances valides</Text>
            <Text style={styles.buttonDesc}>
              Appuyez pour trouver vos ordonnances valides
            </Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.containerButton}>
            <Text style={styles.buttonTitle}>Mon historique</Text>
            <Text style={styles.buttonDesc}>
              Appuyez pour consulter l'historique de vos ordonnances
            </Text>
          </View>
        </Pressable>
        </View>
        <View>
        <View style={styles.containerSubTitle}>
          <Text style={styles.subTitle}>Autre</Text>
        </View>
        <Pressable>
          <View style={styles.containerButton}>
            <Text style={styles.buttonTitle}>Trouver une pharmacie</Text>
            <Text style={styles.buttonDesc}>
              Appuyez pour trouver une pharmacie proche de moi
            </Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.containerButton}>
            <Text style={styles.buttonTitle}>Contacter mon medecin</Text>
            <Text style={styles.buttonDesc}>
              Appuyez pour contacter l'un de mes medecins
            </Text>
          </View>
        </Pressable>
        </View>
        <View style={{marginTop: 15}}/>
        <Pressable>
          <View style={styles.containerSubButton}>
            <Text style={styles.buttonTitleSub}>Paramètres</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.containerSubButton}>
            <Text style={styles.buttonTitleSub}>Nous contacter</Text>
          </View>
        </Pressable>
        <View style={{height:200}}/>
      </ScrollView>
      
    </View>
  );
}
export default PageAccueil;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    containerTitle: {
      position: "absolute",
      top: 0,
      left: 0,
      elevation: 10,
      width: "100%",
      opacity: 0.8,
      backgroundColor: "#d9d9d9",
      

    },
    containerSubTitle: {
      marginTop: 30,
      marginLeft: 28,
      
    },
    containerImage: {
      marginTop: 30,
      height: 150,
      alignItems: "center",
      
    },
    textConnexion: { fontSize: 32 },
    image: {
      
      height: "100%",
      resizeMode: "contain",
    },
    title:{
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 37,
        marginLeft: 20,
        marginBottom: 15,
    },
    subTitle:{
      fontSize: 28,
      fontWeight: "bold",
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0
  },
  containerButton: {
    marginHorizontal: 15,
    marginBottom: 9,
    height: 120, //130 sur le figma
    width: "auto",
    backgroundColor: "#2fb55e",
    borderRadius: 10,
  },
  containerSubButton: {
    marginHorizontal: 15,
    marginBottom: 9,
    height: 50, //130 sur le figma
    width: "auto",
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 22,
    // fontWeight: "medium",
    marginLeft: 12,
    marginTop: 22,
  },
  buttonDesc: {
    fontSize: 18,
    // fontWeight: "light",
    marginLeft: 12,
    width: "70%",
  },
  buttonTitleSub: {
    fontSize: 22,
    // fontWeight: "medium",
    marginLeft: 12,
    marginTop: 10,
  },
  containerScroll:{
    width: "100%",
    height: "100%",
  }
  });