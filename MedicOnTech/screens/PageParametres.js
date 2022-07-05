import { View, StyleSheet, Text, Pressable, Switch } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
const languages = ["Français", "English"];
const themes = ["sombre", "clair"];


import {
  widthPixel,
  heightPixel,
  fontPixel,
} from "../components/Sizer";

function PageParametres() {



  return (
    <View style={styles.container}>
        <View style={styles.containerButtons}>
              <View style={styles.button}>
                  <Text style={styles.buttonText}>Thème</Text>
                  <View style={styles.dropList}>
                  <SelectDropdown
                    data={themes}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index)
                    }}
                    renderDropdownIcon={() => (
                      <View style={styles.dropdownIcon}>
                        <Text style={styles.dropdownButtonText}>▼</Text>
                      </View>
                    )}
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    defaultButtonText={themes[0]}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item
                    }}
                  />
                  </View>
              </View>
            
              <View style={styles.button}>
                  <Text style={styles.buttonText}>Langue</Text>
                  <View style={styles.dropList}>
                  <SelectDropdown
                    data={languages}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index)
                    }}
                    renderDropdownIcon={() => (
                      <View style={styles.dropdownIcon}>
                        <Text style={styles.dropdownButtonText}>▼</Text>
                      </View>
                    )}
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    defaultButtonText={languages[0]}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item
                    }}
                  />
                  </View>
              </View>
            
            
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
  containerButtons: {
    display: "flex",
    flexDirection: "column",
    marginTop: heightPixel(20),
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    
  },
  
  button: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  buttonText: {
    fontFamily: "cera-pro-medium",
    fontSize: fontPixel(18),
    marginLeft: widthPixel(20),
    alignSelf: "center",
  },
  dropList: {
    marginLeft: "auto",
    marginRight: 0,
  },
  dropdownIcon: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginRight: widthPixel(10),
  },
  
  dropdownButton: {
    backgroundColor: "#fff",
    width: widthPixel(300),
  },
  dropdownButtonText: {
    fontFamily: "cera-pro-medium",
    fontSize: fontPixel(18),
    alignSelf: "center",
    display: "flex",
    alignItems: "flex-end",
  },

});
