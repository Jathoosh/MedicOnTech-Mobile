import { View, Text, StyleSheet } from "react-native";
function PageHistorique() {
  return (
    <View style={styles.container}>
      <Text>Historique</Text>
    </View>
  );
}

export default PageHistorique;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
