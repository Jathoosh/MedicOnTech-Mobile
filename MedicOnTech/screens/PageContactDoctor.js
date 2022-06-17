import { View, FlatList, StyleSheet, Text } from "react-native";
import DoctorItem from "../components/DoctorItem";
import { DOCTOR } from "../Models/data";
function PageContactDoctor() {
  
  function renderDoctorItem(itemData) {
    return <DoctorItem data={itemData.item} />;
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={DOCTOR}
        keyExtractor={(item) => item.id}
        renderItem={renderDoctorItem}
        style={styles.list}
      />
    </View>
  );
}

export default PageContactDoctor;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff", },
});