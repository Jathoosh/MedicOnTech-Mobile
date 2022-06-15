import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Pressable,
    Animated,
} from "react-native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

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
        <View style={styles.containerButton}>
          <Pressable onPress={() => {}} android_ripple={{color: '#FFFFFF'}} style={{flex: 1}}>
            <View>
              <Text style={styles.buttonTitle}>Ordonnances valides</Text>
              <Text style={styles.buttonDesc}>
                Appuyez pour trouver vos ordonnances valides
              </Text>
              </View>
              
              <View style={{height: 120, position: "absolute", top: 0, left: "70%"}}>
                <Image
                  source={require("../assets/ordonnance.png")}
                  style={{width: 100, height: 120, resizeMode: "contain"}}
                />
              </View>
          </Pressable>
          
        </View>
        
        <View style={styles.containerButton}>
          <Pressable onPress={() => {}} android_ripple={{color: '#FFFFFF'}} style={{flex: 1}}>
            <View style={{alignItems: "flex-end"}}>
              <Text style={styles.buttonTitleHist}>Mon historique</Text>
              <Text style={styles.buttonDesc}>
                Appuyez pour consulter l'historique de vos ordonnances
              </Text>
            </View>
            <View style={{height: 120, position: "absolute", top: 0}}>
                <Image
                  source={require("../assets/ordonnance.png")}
                  style={{width: 100, height: 120, resizeMode: "contain"}}
                />
              </View>
          </Pressable>
        </View>
        </View>
        <View>
        <View style={styles.containerSubTitle}>
          <Text style={styles.subTitle}>Autre</Text>
        </View>
        <View style={styles.containerButton}>
          <Pressable onPress={() => {}} android_ripple={{color: '#FFFFFF'}} style={{flex: 1}}>
            
              <Text style={styles.buttonTitle}>Trouver une pharmacie</Text>
              <Text style={styles.buttonDesc}>
                Appuyez pour trouver une pharmacie proche de moi
              </Text>
              <View style={{height: 120, position: "absolute", top: 15, left: "72%"}}>
                <Image
                  source={require("../assets/map.png")}
                  style={{width: 100, height: 120, resizeMode: "contain"}}
                />
              </View>
            
          </Pressable>
        </View>
        <View style={styles.containerButton}>
          <Pressable onPress={() => {}} android_ripple={{color: '#FFFFFF'}} style={{flex: 1}}>
            
              <Text style={styles.buttonTitle}>Contacter mon medecin</Text>
              <Text style={styles.buttonDesc}>
                Appuyez pour contacter l'un de mes medecins
              </Text>
              <View style={{height: 120, position: "absolute", top: 0, left: "72%"}}>
                <Image
                  source={require("../assets/medecin.png")}
                  style={{width: 100, height: 120, resizeMode: "contain"}}
                />
              </View>
            
          </Pressable>
        </View>
        </View>
        <View style={{marginTop: 15}}/>
        <View style={styles.containerSubButton}>
          <Pressable android_ripple={{color: '#FFFFFF'}} style={{flex: 1}}>
              <Text style={styles.buttonTitleSub}>Paramètres</Text>
              <View style={{height: 50, position: "absolute", top: 0}}>
                <Image
                  source={require("../assets/engrenage.png")}
                  style={{width: 50, height: 50, resizeMode: "contain"}}
                />
              </View>
          </Pressable>
        </View>
        <View style={styles.containerSubButton}>
          <Pressable android_ripple={{color: '#FFFFFF'}} style={{flex: 1}}>
            
              <Text style={styles.buttonTitleSub}>Nous contacter</Text>
              
              <View style={{height: 50, position: "absolute", top: 0}}>
                <Image
                  source={require("../assets/lettre.png")}
                  style={{width: 50, height: 50, resizeMode: "contain"}}
                />
              </View>
          </Pressable>
        </View>
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
      zIndex: 10,
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
        fontFamily: "cera-pro-black",
        marginTop: 37,
        marginLeft: 20,
        marginBottom: 15,
    },
    subTitle:{
      fontSize: 28,
      fontFamily: "cera-pro-black",
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0
  },
  containerButton: {
    marginHorizontal: 15,
    marginBottom: 9,
    height: 120, //130 sur le figma
    width: "auto",
    backgroundColor: '#2fb55e',
    borderRadius: 10,
    overflow: "hidden",
    
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
    fontFamily: "cera-pro-medium",
    marginLeft: 12,
    marginTop: 22,
    width: "80%",
    
   
  },
  buttonTitleHist: {
    
    fontSize: 22,
    fontFamily: "cera-pro-medium",
    marginLeft: 12,
    marginTop: 22,
    width: "70%",
    
   
  },
  buttonDesc: {
    fontSize: 18,
    fontFamily: "cera-pro-light",
    marginLeft: 12,
    width: "70%",
    
  },
  buttonTitleSub: {
    fontSize: 22,
    fontFamily: "cera-pro-medium",
    marginLeft: 55,
    marginTop: 10,
  },
  containerScroll:{
    width: "100%",
    height: "100%",
  }
  });