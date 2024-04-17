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
import GradientContainer from "../components/GradientContainer";
import { useData } from "../components/DataProvider";

const DependentsPage = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();
 const [dependents, setDependents] = React.useState(
  userData.dependents || false
 );

 const handleSave = () => {
  updateUserData({ dependents });
  navigation.navigate("ConsentPage");
 };

 return (
  <GradientContainer style={styles.container}>
   <View style={{ justifyContent: "space-between", flex: 1 }}>
    <TouchableOpacity
     style={styles.backButton}
     onPress={() => navigation.goBack()}
    >
     <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
    </TouchableOpacity>

    <View
     style={{
      flex: 1,
      flexDirection: "column",
     }}
    >
     <View style={styles.indicatorContainer}>
      <Image resizeMode="contain" source={require("../assets/progress3.png")} />
     </View>

     <View style={{ padding: 10 }}>
      <Text style={styles.title}>Do you have any Dependents?</Text>
      <Text style={{ ...styles.subHeadline2, textAlign: "left" }}>
       A dependent is someone you support financially, like a child or a family
       member who depends on you. For tax purposes, this could mean: Your
       children under 18 years of age. Any other relatives who rely on you for
       support because they have a low income or an impairment.
      </Text>

      <View style={styles.inputContainer}>
       <SecondaryButton
        onPress={() => {
         setDependents(true);
         navigation.navigate("Dependents");
        }}
        title="Add a Dependent"
       />
      </View>
     </View>
    </View>

    <CustomButton
     style={{ ...styles.nextButton, bottom: 0 }}
     onPress={() => {
      handleSave();
     }}
     title="Next"
    />
   </View>
  </GradientContainer>
 );
};

export default DependentsPage;
