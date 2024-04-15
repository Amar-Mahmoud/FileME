import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../styles";

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


export default EmailVerificationScreen;
