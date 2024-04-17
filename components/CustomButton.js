import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {
 return (
  <TouchableOpacity
   style={styles.button}
   onPress={onPress}
   activeOpacity={0.5} // Reduces the opacity of the button when pressed
  >
   <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 button: {
  backgroundColor: "#3A45AD",
  paddingVertical: 12,
  paddingHorizontal: 50,
  borderRadius: 5,
  marginVertical: 10,
  marginHorizontal: 5,
  elevation: 8,
 },
 buttonText: {
  color: "white",
  fontSize: 16,
  fontFamily: "SourceSansPro-Regular",
  fontWeight: "bold",
  alignSelf: "center",
 },
});

export default CustomButton;
