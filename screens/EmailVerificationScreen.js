import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EmailVerificationScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      {/* Replace with your own implementation of a back arrow if needed */}
      <TouchableOpacity 
        style={styles.backArrow}
        onPress={() => navigation.goBack()}
      >
        {/* Icon component or image */}
      </TouchableOpacity>

      <View style={styles.indicatorContainer}>
        {/* Your indicators go here */}
      </View>

      <Text style={styles.title}>Let’s verify your email</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Your email"
      />

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>I prefer email as my primary form of feedback and contact</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {/* Handle the press event */}}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backArrow: {
    position: 'absolute',
    top: 50, // Adjust according to your status bar
    left: 20,
    // Icon styling
  },
  indicatorContainer: {
    // Style for your page indicators
    position: 'absolute',
    top: 50, // Adjust according to your status bar
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  button: {
    backgroundColor: '#007bff', // Use your own color
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default EmailVerificationScreen;
