import { View, Pressable, Text, Image, StyleSheet } from "react-native";

function OrdonnanceItem({ data }) {
  return (
    <View style={styles.container}>
      <View
      >
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
      </View>
    </View>
  );
}

export default OrdonnanceItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    padding: 10,

  },

  buttonTitle: {
    fontSize: 28,
    fontFamily: "cera-pro-black",
    alignSelf: "center",
    textAlign: "center",
    
    width: "100%",
  },
  buttonDesc: {
    fontSize: 18,
    fontFamily: "cera-pro-light",
    marginTop: 5,
    width: "100%",
  },
});
