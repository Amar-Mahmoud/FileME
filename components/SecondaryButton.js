import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}  // Reduces the opacity of the button when pressed
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 10,  
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10,
    elevation: 8, 
  },
  buttonText: {
    color: 'black',
    fontSize: 14, 
    fontWeight: 'bold', 
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default CustomButton;
