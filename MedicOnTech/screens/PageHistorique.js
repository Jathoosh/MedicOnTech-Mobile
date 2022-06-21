import { View, StyleSheet, FlatList } from "react-native";
import OrdonnanceItem from "../components/OrdonnanceItem";
import { DATA } from "../Models/data";
function PageHistorique() {
  const displayHistorique = DATA.filter((dataItem) => {
    return dataItem.personne.indexOf("Maxence ROBICHON") >= 0;
  });

  function renderHistoriqueItem(itemData) {
    return <OrdonnanceItem data={itemData.item} page={"historique"} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayHistorique}
        keyExtractor={(item) => item.id}
        renderItem={renderHistoriqueItem}
        style={styles.list}
      />
    </View>
  );
}

export default PageHistorique;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
});
