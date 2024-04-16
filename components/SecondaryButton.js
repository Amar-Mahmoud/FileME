import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SecondaryButton = ({ title, onPress }) => {
 return (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.5}>
   <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        elevation: 8,
       },
 buttonText: {
  color: "#007B5D",
  fontSize: 16,
  fontWeight: "bold",
  alignSelf: "center",
 },
});

export default SecondaryButton;
