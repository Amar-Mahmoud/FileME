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

const InvestmentIncome = () => {
 const navigation = useNavigation();
 const [interestGain, setInterestGain] = useState();
 const [interestLoss, setInterestLoss] = useState();
 const [dividendGain, setDividendGain] = useState();
 const [dividendLoss, setDividendLoss] = useState();

 return (
  <View style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>
    <Image
     style={styles.logo}
     resizeMode="contain"
     source={require("../assets/progress_2_4.png")} // Path to your image
    />
   <ScrollView contentContainerStyle={{}}>
    <Text style={styles.title}>What is your Investment Income?</Text>
    <Text style={styles.subtitle}>
    If you have Investments, we need to track their profits. Do not include the investment amount, we only need to know how much you GAINED or LOST
    </Text>

    <View style={styles.inputContainer}>
     <Text style={styles.inputLabel}>Your GAIN in interest?</Text>
     <TextInput
      style={styles.input}
      value={interestGain}
      onChangeText={setInterestGain}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
     <Text style={styles.inputLabel}>Your LOSS in interest?</Text>
     <TextInput
      style={styles.input}
      value={interestLoss}
      onChangeText={setInterestLoss}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
     <Text style={styles.inputLabel}>Your GAIN in dividends?</Text>
     <TextInput
      style={styles.input}
      value={dividendGain}
      onChangeText={setDividendGain}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
     <Text style={styles.inputLabel}>Your LOSS in dividends? </Text>
     <TextInput
      style={styles.input}
      value={dividendLoss}
      onChangeText={setDividendLoss}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
    </View>
   </ScrollView>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("RegisteredInvestmentAccounts");
    }}
    title="Next"
   />
  </View>
 );
};


export default InvestmentIncome;
