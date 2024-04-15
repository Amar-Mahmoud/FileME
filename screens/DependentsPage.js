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

const DependentsPage = () => {
 const navigation = useNavigation();
 const [dependents, setDependents] = useState("");

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
      source={require("../assets/progress3.png")} // Path to your image
     />
    </View>

    <Text style={styles.title}>Do you have any Dependents?</Text>
    <Text style={styles.subtitle}>
     A dependent is someone you support financially, like a child or a family
     member who depends on you. For tax purposes, this could mean: Your children
     under 18 years of age. Any other relatives who rely on you for support
     because they have a low income or an impairment.
    </Text>

    <View style={styles.inputContainer}>
     <SecondaryButton
      onPress={() => {
       navigation.navigate("Dependents");
      }}
      title="Add Dependent"
     />
    </View>
   </View>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("ConsentPage");
    }}
    title="Next"
   />
  </View>
 );
};

export default DependentsPage;
