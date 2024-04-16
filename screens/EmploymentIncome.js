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

const EmploymentIncome = () => {
 const navigation = useNavigation();
 const [income, setIncome] = useState();

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
       source={require("../assets/progress_2_1.png")} // Path to your image
      />
     </View>
     <View style={{ padding: 15 }}>
      <Text style={styles.title}>What is your Employment Income?</Text>
      <Text style={styles.subtitle}>
       Your employer should have given you a T4 slip near tax season. Enter the
       income amount here!
      </Text>

      <View style={styles.inputContainer}>
       <Text style={styles.inputLabel}>Employment Income</Text>
       <TextInput
        style={styles.input}
        value={income}
        onChangeText={setIncome}
        placeholder="$ 0.00"
        keyboardType="number-pad"
       />
      </View>
     </View>
    </View>
   </View>

   <CustomButton
    style={{ ...styles.nextButton, bottom: 0 }}
    onPress={() => {
     navigation.navigate("SelfEmploymentIncome");
    }}
    title="Next"
   />
  </GradientContainer>
 );
};

export default EmploymentIncome;
