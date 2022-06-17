import { View, Pressable, Text, Image, StyleSheet } from "react-native";

function OrdonnanceItem({ data }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {}}
        android_ripple={{ color: "#FFFFFF" }}

        style={{ flex: 1, borderRadius: 10 }}
      >
        <Text style={styles.buttonTitle}>{data.personne}</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../assets/code_barre.png")}
            style={styles.image}
          />

          <View style={styles.innerText}>
            <Text style={styles.buttonDesc}>
              Délivré le : {data.dateDelivre}
            </Text>
            <Text style={styles.buttonDesc}>Par : {data.docteur}</Text>
          </View>
        </View>
        <View style={styles.buttonDisplay}>
          <Text style={styles.textDisplay}>Afficher l'ordonnance</Text>
        </View>

      </Pressable>
    </View>
  );
}

export default OrdonnanceItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: 20,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,

  },

  buttonTitle: {
    fontSize: 28,
    fontFamily: "cera-pro-black",
    alignSelf: "center",
    marginTop: 10,

  },
  buttonDesc: {
    fontSize: 18,
    fontFamily: "cera-pro-medium",
  },
  buttonDisplay: {
    backgroundColor: "#1E4EDD",
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  textDisplay: { color: "white", fontFamily: "cera-pro-medium", fontSize: 18 },
  image: { width: 150, height: 105, resizeMode: "contain", marginLeft: 15 },
  innerText: {
    paddingLeft: 15,
    flex: 1,
    flexWrap: "nowrap",
    justifyContent: "space-evenly",

  },
});
