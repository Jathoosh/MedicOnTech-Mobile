import { View, Pressable, Text, Image, StyleSheet, Linking, Dimensions, PixelRatio, Platform} from "react-native";


const { 
  width: SCREEN_WIDTH, 
  height: SCREEN_HEIGHT 
  } = Dimensions.get('window');


const widthBaseScale = SCREEN_WIDTH / 384;
const heightBaseScale = SCREEN_HEIGHT / 816;

function normalize(size, based = 'width') {
  const newSize = (based === 'height') ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
 }

 //for width pixel
const widthPixel = (size) => {
  return normalize(size, 'width');
};
//for height pixel
const heightPixel = (size) => {
  return normalize(size, 'height');
};
//for font pixel
const fontPixel = (size) => {
  return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
};
export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal
};

function OrdonnanceItem({ data }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.buttonTitle}>{data.personne}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          

          <View>
            <Text style={styles.buttonDesc}>
              numéro : {data.numero}
            </Text>
            <Text style={styles.buttonDesc}>
              email : {data.email}
            </Text>
          </View>
        </View>
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <Pressable onPress={() => {Linking.openURL("tel:"+data.numero)}} android_ripple={{color: '#FFFFFF'}} style={styles.buttonOption}>
          <Image source={require("../assets/phone.png")} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Appeler</Text>
        </Pressable>
        <Pressable onPress={() => {Linking.openURL("mailto:"+data.email)}} android_ripple={{color: '#FFFFFF'}} style={styles.buttonOption}>
        <Image source={require("../assets/letter-white.png")} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Envoyer un email</Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
}

export default OrdonnanceItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: pixelSizeVertical(10),
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    padding: pixelSizeVertical(10),

  },

  buttonTitle: {
    fontSize: fontPixel(28),
    fontFamily: "cera-pro-black",
    alignSelf: "center",
    textAlign: "center",
    
    width: "100%",
  },
  buttonDesc: {
    fontSize: fontPixel(18),
    fontFamily: "cera-pro-light",
    marginTop: pixelSizeVertical(5),
    width: "100%",
  },
  buttonOption: {
    display: "flex",
    flexDirection: "row",
    marginTop: pixelSizeVertical(10),
    padding: pixelSizeVertical(10),
    backgroundColor: "#1e4edd",
    borderRadius: 13,
    

  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: fontPixel(18),
    fontFamily: "cera-pro-light",
    
  },
  buttonIcon: {
    width: widthPixel(25),
    height: heightPixel(25),
    marginRight: pixelSizeHorizontal(10),
    marginLeft: pixelSizeHorizontal(2),
  },

});
