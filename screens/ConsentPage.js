import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import CustomButton from "../components/CustomButton";
import styles from "../styles";

const ConsentPage = () => {
 const navigation = useNavigation();
 const [consent, setConsent] = useState(false);

 return (
  <View style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>

   {/* Page Indicators */}
   <View style={{ justifyContent: "center" }}>
    <View style={styles.indicatorContainer}>
     <Image
      style={styles.logo}
      resizeMode="contain"
      source={require("../assets/progress4.png")}
     />
    </View>

    <Text style={styles.title}>Do you Consent to Save Your Data with us?</Text>
    <Text style={styles.subtitle}>
     We’re doing this out of the kindness of our heart, your info is safe wit
     us!
    </Text>

    <View style={styles.inputContainer}>
     <SecondaryButton
      onPress={() => {
       setConsent(false);
      }}
      title="No"
     />
     <SecondaryButton
      onPress={() => {
       setConsent(true);
      }}
      title="Yes"
     />
    </View>
   </View>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("LetsContinue");
    }}
    title="Save"
   />
  </View>
 );
};

export default ConsentPage;
