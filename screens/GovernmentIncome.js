import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Image,
 ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import CustomButton from "../components/CustomButton";
import styles from "../styles";

const GovernmentIncome = () => {
 const navigation = useNavigation();
 const [govIncome, setGovIncome] = useState();

 return (
  <View style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>
   <View style={styles.indicatorContainer}>
    <Image
     style={styles.logo}
     resizeMode="contain"
     source={require("../assets/progress_2_4.png")} // Path to your image
    />
   </View>
   <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
    <Text style={styles.title}>Does the Government Give You Any Income?</Text>
    <Text style={styles.subtitle}>
     Do you receive from government programs like EI or social assistance?
    </Text>

    <View style={styles.inputContainer}>
     <Text style={styles.inputLabel}>Government Plan Income</Text>
     <TextInput
      style={styles.input}
      value={govIncome}
      onChangeText={setGovIncome}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
    </View>
   </ScrollView>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("ExpenseContinue");
    }}
    title="Next"
   />
  </View>
 );
};



export default GovernmentIncome;
