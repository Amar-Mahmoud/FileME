import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SecondaryButton = ({ title, onPress }) => {
    const [buttonColor, setButtonColor] = useState("#fff"); // Initial background color
    const [fontColor, setFontColor] = useState("#007B5D"); // Initial font color

    const handlePress = () => {
        const newButtonColor = buttonColor === "#fff" ? "green" : "#fff";
        setButtonColor(newButtonColor);

        const newFontColor = fontColor === "#007B5D" ? "#ffffff" : "#007B5D"; // Changes to white or the original color
        setFontColor(newFontColor);

        if (onPress) {
          onPress(); 
        }
    };

    return (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]} 
          onPress={handlePress}
          activeOpacity={0.5}
        >
          <Text style={[styles.buttonText, { color: fontColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        elevation: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: "SourceSansPro-Regular",
    },
});

export default SecondaryButton;
