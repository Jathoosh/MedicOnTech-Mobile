import { View, FlatList, StyleSheet, Text } from "react-native";
import OrdonnanceItem from "../components/OrdonnanceItem";
import { DATA } from "../Models/data";
function PageOrdonnance() {
  const displayOrdonnance = DATA.filter((dataItem) => {
    return dataItem.personne.indexOf("Maxence ROBICHON") >= 0;
  });

  function renderOrdonnanceItem(itemData) {
    return <OrdonnanceItem data={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayOrdonnance}
        keyExtractor={(item) => item.id}
        renderItem={renderOrdonnanceItem}
        style={styles.list}
      />
    </View>
  );
}

export default PageOrdonnance;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
