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
import GradientContainer from "../components/GradientContainer";

const InvestmentIncome = () => {
 const navigation = useNavigation();
 const [interestGain, setInterestGain] = useState();
 const [interestLoss, setInterestLoss] = useState();
 const [dividendGain, setDividendGain] = useState();
 const [dividendLoss, setDividendLoss] = useState();

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
      <Image resizeMode="contain" source={require("../assets/progress_2_3.png")} />
     </View>
     <ScrollView contentContainerStyle={{}}>
      <View style={{ padding: 15 }}>
       <Text style={styles.title}>What is your Investment Income?</Text>
       <Text style={styles.subtitle}>
        If you have Investments, we need to track their profits. Do not include
        the investment amount, we only need to know how much you GAINED or LOST
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
      </View>
     </ScrollView>
    </View>

    <CustomButton
     style={{ ...styles.nextButton, bottom: 0 }}
     onPress={() => {
      navigation.navigate("RegisteredInvestmentAccounts");
     }}
     title="Next"
    />
   </View>
  </GradientContainer>
 );
};

export default InvestmentIncome;
