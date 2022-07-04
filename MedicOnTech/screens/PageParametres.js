import { View, StyleSheet, Text, Pressable } from "react-native";


function PageParametres() {



  return (
    <View style={styles.container}>
        <View style={styles.containerButtons}>
            <Pressable>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Thème</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Langue</Text>
                </View>
            </Pressable>
        </View>
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
