import { View, Text, StyleSheet } from "react-native";
function PageOrdonnance() {
  return (
    <View style={styles.container}>
      <Text>Ordonnances</Text>
    </View>
  );
}

export default PageOrdonnance;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
