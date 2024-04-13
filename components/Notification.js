import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Notification = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7} 
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
    marginVertical: 10,
    marginHorizontal: 20,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Notification;
