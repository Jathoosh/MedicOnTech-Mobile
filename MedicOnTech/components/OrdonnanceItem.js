import { View, Pressable, Text, Image, StyleSheet } from "react-native";

function OrdonnanceItem({ data }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {}}
        android_ripple={{ color: "#FFFFFF" }}
        style={{ flex: 1 }}
      >
        <Text style={styles.buttonTitle}>{data.personne}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            source={require("../assets/ordonnance.png")}
            style={{ width: 100, height: 120, resizeMode: "contain" }}
          />

          <View>
            <Text style={styles.buttonDesc}>
              Délivré le : {data.dateDelivre}
            </Text>
            <Text>Par : {data.docteur}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default OrdonnanceItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },

  buttonTitle: {
    fontSize: 28,
    fontFamily: "cera-pro-black",
    alignSelf: "center",
    marginTop: 10,
    width: "80%",
  },
  buttonDesc: {
    fontSize: 18,
    fontFamily: "cera-pro-light",
    marginLeft: 12,
    width: "70%",
  },
});
