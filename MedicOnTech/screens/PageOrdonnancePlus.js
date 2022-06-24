import { View, FlatList, StyleSheet, Text } from "react-native";

function PageOrdonnancePlus({data}) {

  return (
    <View style={styles.container}>
        <Text>{data}</Text>
    </View>
  );
}

export default PageOrdonnancePlus;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
});
