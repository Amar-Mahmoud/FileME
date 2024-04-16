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

const EmploymentIncome = () => {
 const navigation = useNavigation();
 const [income, setIncome] = useState();
 const [expenses, setExpenses] = useState();

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
        value={income}
        onChangeText={setIncome}
        placeholder=""
        keyboardType="number-pad"
       />
       <Text style={styles.inputLabel}>
        What were your expenses regarding this income?
       </Text>
       <TextInput
        style={styles.input}
        value={expenses}
        onChangeText={setExpenses}
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
     navigation.navigate("InvestmentIncome");
    }}
    title="Next"
   />
  </GradientContainer>
 );
};


export default EmploymentIncome;
