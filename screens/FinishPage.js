import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";
import { useData } from "../components/DataProvider";


const FinishPage = () => {
 const navigation = useNavigation();
 const { userData } = useData();

 const handleSubmit = async () => {
    try {
        const response = await fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = await response.json();
        console.log('Data submitted:', result);
        navigation.navigate("Dashboard");
    } catch (error) {
        console.error('Error submitting data:', error);
    }
};

 return (
    <GradientContainer style={styles.container}>
    <View style={styles.statusBarPlaceholder} />
 
    <View style={styles.indicatorContainer}>
     <View style={[styles.indicator, styles.activeIndicator]} />

     <View style={[styles.indicator, styles.activeIndicator]} />

     <View style={[styles.indicator, styles.activeIndicator]} />

    </View>
 
    <Image
     style={styles.logo}
     resizeMode="contain"
     source={require("../assets/onboarding_1.png")}
    />

   <View style={{ marginHorizontal: 5 }}>
    <Text style={styles.headline}>We’re all done!</Text>

    <Text style={styles.subHeadline2}>
     We’re All Set! Your tax information is now available in the home screen!
    </Text>
   </View>

   <SecondaryButton
    style={styles.startButton}
    onPress={() => handleSubmit()}
    title="Bring Me Back Home!"
   />
  </GradientContainer>
 );
};


export default FinishPage;
