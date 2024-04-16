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
import GradientContainer from "../components/GradientContainer";
import styles from "../styles";
import { useData } from "../components/DataProvider";

const RegisteredInvestmentAccounts = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();

 const [rrspcontrib, setRRSPContrib] = React.useState(
  userData.rrspcontrib || ""
 );
 const [rrspwith, setRRSPWith] = React.useState(userData.rrspwith || "");
 const [pension, setPension] = React.useState(userData.pension || "");
 const [pensionWithdrawl, setPensionWithdrawl] = React.useState(
  userData.pensionWithdrawl || ""
 );

 const handleSave = () => {
  updateUserData({ rrspcontrib, rrspwith, pension, pensionWithdrawl });
  navigation.navigate("GovernmentIncome");
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
       source={require("../assets/progress_2_4.png")}
      />
     </View>
     <ScrollView contentContainerStyle={{}}>
      <View style={{ padding: 15 }}>
       <Text style={styles.title}>What is your Pension & RRSP Amounts?</Text>
       <Text style={styles.subtitle}>
        How much did you contribute to your pension and RRSP? If you have, how
        much did you TAKE OUT of these accounts?
       </Text>

       <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
         Your CONTRIBUTION to RRSP Account?
        </Text>
        <TextInput
         style={styles.input}
         value={rrspcontrib}
         onChangeText={setRRSPContrib}
         placeholder=""
         keyboardType="number-pad"
        />
        <Text style={styles.inputLabel}>Your WITHDRAWL from RRSP Account?</Text>
        <TextInput
         style={styles.input}
         value={rrspwith}
         onChangeText={setRRSPWith}
         placeholder=""
         keyboardType="number-pad"
        />
        <Text style={styles.inputLabel}>
         Your CONTRIBUTION to Pension Account?
        </Text>
        <TextInput
         style={styles.input}
         value={pension}
         onChangeText={setPension}
         placeholder=""
         keyboardType="number-pad"
        />
        <Text style={styles.inputLabel}>
         Your WITHDRAWAL from Pension Account?{" "}
        </Text>
        <TextInput
         style={styles.input}
         value={pensionWithdrawl}
         onChangeText={setPensionWithdrawl}
         placeholder=""
         keyboardType="number-pad"
        />
       </View>
      </View>
     </ScrollView>
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

export default RegisteredInvestmentAccounts;
