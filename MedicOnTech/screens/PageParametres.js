import { View, FlatList, StyleSheet, ActivityIndicator, Text } from "react-native";


function PageParametres() {



  return (
    <View style={styles.container}>
      <Text>Paramètres</Text>
    </View>
  );
}

export default PageParametres;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
