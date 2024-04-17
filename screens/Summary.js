import React, { useState, useEffect } from "react";
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
import { useData } from "../components/DataProvider";
import GradientContainer from "../components/GradientContainer";
import styles from "../styles";

const Summary = ({}) => {
 const { userData } = useData();

 const calculateTax = () => {
  let taxableIncome =
   userData.income +
   userData.interestGain +
   userData.dividendGain +
   userData.pension +
   userData.totalprofit +
   userData.otherIncome +
   userData.govIncome -
   userData.rrspContributions -
   userData.homeOffice -
   userData.vehicle -
   userData.supplies -
   userData.travel -
   userData.tools -
   userData.tuition -
   userData.donation;

  let taxOwed = 0;
  if (taxableIncome > 100000) {
   taxOwed += (taxableIncome - 100000) * 0.4;
   taxableIncome = 100000;
  }
  if (taxableIncome > 80000) {
   taxOwed += (taxableIncome - 80000) * 0.35;
   taxableIncome = 80000;
  }
  if (taxableIncome > 60000) {
   taxOwed += (taxableIncome - 60000) * 0.3;
   taxableIncome = 60000;
  }
  if (taxableIncome > 40000) {
   taxOwed += (taxableIncome - 40000) * 0.25;
   taxableIncome = 40000;
  }
  if (taxableIncome > 20000) {
   taxOwed += (taxableIncome - 20000) * 0.2;
   taxableIncome = 20000;
  }
  if (taxableIncome <= 20000) {
   taxOwed += taxableIncome * 0.15;
  }

  return taxOwed >= 0
   ? `$${taxOwed.toFixed(2)}`
   : `($${(-taxOwed).toFixed(2)})`;
 };

 const businessExpenses =
  userData.homeOffice +
  userData.vehicle +
  userData.supplies +
  userData.travel +
  userData.tools;

 // Basic personal amount and dependent deduction constants
 const BASIC_PERSONAL_AMOUNT = 15000;
 const ELIGIBLE_DEPENDENT_AMOUNT = 15000;
 const CANADA_CAREGIVER_AMOUNT = 7999;

 // Calculations
 const net = calculateTax();

 let perc = 0;
 if (net >= 0 && net <= 20000) {
  perc = 0.15;
 } else if (net <= 40000) {
  perc = 0.2;
 } else if (net <= 60000) {
  perc = 0.25;
 } else if (net <= 80000) {
  perc = 0.3;
 } else if (net <= 100000) {
  perc = 0.35;
 } else {
  perc = 0.4;
 }

 const amt = net * perc;

 return (
  <GradientContainer>
   <View style={{ flexDirection: "column", flex: 1, marginTop: "15%" }}>
    <Text style={styles.title}>Summary</Text>

    <View style = {{marginHorizontal : 0}}>
     <Text style={styles.in}>INCOME</Text>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Employment</Text>
      <Text style={styles.out}>${userData.income}</Text>
     </View>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Self-Employment</Text>
      <Text style={styles.out}>${userData.selfEmploymentIncome}</Text>
     </View>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Investment Income - Interest</Text>
      <Text style={styles.out}>${userData.interestGain}</Text>
     </View>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Investment Income - Dividends</Text>
      <Text style={styles.out}>${userData.dividendGain}</Text>
     </View>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Government Benefits</Text>
      <Text style={styles.out}>${userData.govIncome}</Text>
     </View>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Pension</Text>
      <Text style={styles.out}>${userData.pension}</Text>
     </View>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Investment Income</Text>
      <Text style={styles.out}>${userData.totalprofit}</Text>
     </View>

     <Text style={styles.in}>Total</Text>
     <Text style={styles.out}>
      $
      {userData.income +
       userData.selfEmploymentIncome +
       userData.interestGain +
       userData.dividendGain +
       userData.govIncome +
       userData.pension +
       userData.totalprofit}
     </Text>

     <Text style={styles.in}>DEDUCTIONS</Text>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Business Expenses</Text>
      <Text style={styles.out}>${businessExpenses}</Text>
     </View>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Charity Donation</Text>
      <Text style={styles.out}>${userData.donation}</Text>
     </View>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Other Deductions</Text>
      <Text style={styles.out}>${userData.deduc}</Text>
     </View>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Total</Text>
      <Text style={styles.out}>
       ${userData.businessExpenses + userData.donation + userData.deduc}
      </Text>
     </View>

     <Text> </Text>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>NET TAXABLE</Text>
      <Text style={styles.out}>${net}</Text>
     </View>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>Bracket</Text>
      <Text style={styles.out}>{perc * 100}%</Text>
     </View>

     <Text> </Text>

     <View style={styles.rowContainer}>
      <Text style={styles.in}>DEBIT (CREDIT)</Text>
      <Text style={styles.out}>${calculateTax()}</Text>
     </View>
    </View>
   </View>
  </GradientContainer>
 );
};

export default Summary;
