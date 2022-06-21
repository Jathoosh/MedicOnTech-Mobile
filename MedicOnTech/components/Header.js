import { View, Text, StyleSheet, Dimensions, PixelRatio, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const widthBaseScale = SCREEN_WIDTH / 384;
const heightBaseScale = SCREEN_HEIGHT / 816;

function normalize(size, based = "width") {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width pixel
const widthPixel = (size) => {
  return normalize(size, "width");
};
//for height pixel
const heightPixel = (size) => {
  return normalize(size, "height");
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
  pixelSizeHorizontal,
};



function Header({title}) {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
          <View style={styles.buttonOptionView}>
            <Pressable android_ripple={{color: "#ffffff", borderless: "true"}} style={styles.buttonOption} onPress={() => navigation.replace("PageAccueil")}>
              <Text style={styles.buttonOptionText}>Retour</Text>
            </Pressable>
          </View>
        <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

export default Header;

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
        marginTop: pixelSizeVertical(30),
        marginLeft: pixelSizeHorizontal(28),
      },
      title: {
        fontSize: fontPixel(32),
        fontFamily: "cera-pro-black",
        marginTop: pixelSizeVertical(37),
        
        marginBottom: pixelSizeVertical(15),
      },
      subTitle: {
        fontSize: fontPixel(28),
        fontFamily: "cera-pro-black",
        marginTop: pixelSizeVertical(0),
        marginLeft: pixelSizeHorizontal(0),
        marginBottom: pixelSizeVertical(0),
      },
      //pour éviter l'overflow des android_ripple
      buttonOption: {
        padding: pixelSizeVertical(5),
        borderless: "false",

      },
      buttonOptionView:{
        display: "flex",
        flexDirection: "row",
        height: heightPixel(38),
        marginTop: pixelSizeVertical(40),
        
        backgroundColor: "#1e4edd",
        borderRadius: 13, 
        overflow: 'hidden'
      },
      buttonOptionText: {
          fontSize: fontPixel(20),
          fontFamily: "cera-pro-medium",
          color: "#ffffff",
          padding: pixelSizeVertical(0),
      },
      

});
