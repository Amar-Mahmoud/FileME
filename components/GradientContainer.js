import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const GradientContainer = ({ children, style }) => (
  <LinearGradient
    colors={['#fff','#DAFFFF']}
    style={[styles.container, style]} // Merges the predefined styles with any custom style passed to the component
    start={{ x: 0, y: 0 }} // Starting point of the gradient
    end={{ x: 1, y: 1 }} // Ending point of the gradient
  >
    {children}
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes full height of the screen
    justifyContent: 'center', // Centers children vertically
    alignItems: 'center', // Centers children horizontally
  },
});

export default GradientContainer;
