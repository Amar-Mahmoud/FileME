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
import GradientContainer from "../components/GradientContainer";
import styles from "../styles";
import { useData } from "../components/DataProvider";

const EmploymentIncome = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();
 const [selfEmploymentIncome, setSelfEmploymentIncome] = React.useState(userData.selfEmploymentIncome || "");
 const [selfEmploymentExpenses, setSelfEmploymentExpenses] = React.useState(userData.selfEmploymentIncome || "");

 const handleSave = () => {
  updateUserData({ selfEmploymentIncome, selfEmploymentExpenses});
  navigation.navigate("InvestmentIncome");

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
      <Image
       resizeMode="contain"
       source={require("../assets/progress_2_2.png")} // Path to your image
      />
     </View>

     <View style={{ padding: 15 }}>
      <Text style={styles.title}>What is your Self Employed Income?</Text>
      <Text style={styles.subtitle}>
       How much did you and/or your business make this year in Gross Revenue?
       (revenue with no deductions or expenses)
      </Text>

      <View style={styles.inputContainer}>
       <Text style={styles.inputLabel}>Employment Income</Text>
       <TextInput
        style={styles.input}
        value={selfEmploymentIncome}
        onChangeText={setSelfEmploymentIncome}
        placeholder=""
        keyboardType="number-pad"
       />
       <Text style={styles.inputLabel}>
        What were your expenses regarding this income?
       </Text>
       <TextInput
        style={styles.input}
        value={selfEmploymentExpenses}
        onChangeText={setSelfEmploymentExpenses}
        placeholder=""
        keyboardType="number-pad"
       />
      </View>
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
  </GradientContainer>
 );
};


export default EmploymentIncome;
