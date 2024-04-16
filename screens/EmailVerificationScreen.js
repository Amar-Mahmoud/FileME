import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";
import { useData } from "../components/DataProvider";


const EmailVerificationScreen = () => {
  const navigation = useNavigation();
  const { userData, updateUserData } = useData();
  const [phone, setPhone] = React.useState(userData.phone || "");
 
  const handleSave = () => {
     updateUserData({ phone });
     navigation.navigate("CodeSent")
 };

  return (
    <GradientContainer style={styles.container}>
      <TouchableOpacity 
        style={styles.backArrow}
        onPress={() => navigation.goBack()}
      >
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
        onPress={() => {handleSave()}}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </GradientContainer>
  );
};


export default EmailVerificationScreen;
