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

const Summary = ({ userData, user, capital, incomeTotal, expenses, other, deductionTotal }) => {
  
 function calculateTax(userData) {
  let taxableIncome = userData.income.employmentIncome +
    userData.income.selfEmployedIncome.netBusinessIncome +
    userData.income.investmentIncome.interestProfit +
    userData.income.investmentIncome.dividendsProfit +
    userData.income.pensionIncome +
    userData.income.rrspIncome +
    userData.income.otherIncome +
    userData.income.governmentBenefits -
    userData.receipts.rrspContributions -
    userData.receipts.employmentExpenses.homeOffice -
    userData.receipts.employmentExpenses.vehicle -
    userData.receipts.employmentExpenses.supplies -
    userData.receipts.employmentExpenses.travel -
    userData.receipts.employmentExpenses.tools -
    userData.receipts.otherDeductions.childcareExpenses -
    userData.receipts.otherDeductions.medicalExpenses -
    userData.receipts.otherDeductions.studentLoanInterest -
    userData.otherInformation.deductionLimits.unusedRRSPContributions -
    userData.otherInformation.deductionLimits.tuitionCarryforwards -
    userData.otherInformation.charitableDonations;

  // Apply dependent deductions
  userData.dependents.forEach(dependent => {
    if (dependent.income < BASIC_PERSONAL_AMOUNT) {
      taxableIncome -= ELIGIBLE_DEPENDENT_AMOUNT;
      if (dependent.age >= 18 && dependent.impairment) {
        taxableIncome -= CANADA_CAREGIVER_AMOUNT;
      } else if (dependent.age < 18) {
        taxableIncome -= 2499;
      }
    }
  });

  // Calculate tax based on brackets
  let taxOwed = 0;
  if (taxableIncome > 100000) {
    taxOwed += (taxableIncome - 100000) * 0.40;
    taxableIncome = 100000;
  }
  if (taxableIncome > 80000) {
    taxOwed += (taxableIncome - 80000) * 0.35;
    taxableIncome = 80000;
  }
  if (taxableIncome > 60000) {
    taxOwed += (taxableIncome - 60000) * 0.30;
    taxableIncome = 60000;
  }
  if (taxableIncome > 40000) {
    taxOwed += (taxableIncome - 40000) * 0.25;
    taxableIncome = 40000;
  }
  if (taxableIncome > 20000) {
    taxOwed += (taxableIncome - 20000) * 0.20;
    taxableIncome = 20000;
  }
  if (taxableIncome <= 20000) {
    taxOwed += taxableIncome * 0.15;
  }

  return taxOwed >= 0 ? `$${taxOwed.toFixed(2)}` : `($${(-taxOwed).toFixed(2)})`;
}

const BASIC_PERSONAL_AMOUNT = 15000;
const ELIGIBLE_DEPENDENT_AMOUNT = 15000;
const CANADA_CAREGIVER_AMOUNT = 7999;

 // Calculations
  const net = incomeTotal - deductionTotal;

  let perc = 0;
  if (net >= 0 && net <= 20000) {
    perc = 0.15;
  } else if (net <= 40000) {
    perc = 0.20;
  } else if (net <= 60000) {
    perc = 0.25;
  } else if (net <= 80000) {
    perc = 0.30;
  } else if (net <= 100000) {
    perc = 0.35;
  } else {
    perc = 0.40;
  }

  const amt = net * perc;

 return (
    <View>
      <Text style={styles.title}>Summary</Text>

      <Text style={styles.in}>INCOME</Text>

      <View style={styles.rowContainer}>
        <Text style={styles.in}>Employment</Text>
        <Text style={styles.out}>${userData.income.employmentIncome}</Text>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.in}>Self-Employment</Text>
        <Text style={styles.out}>${userData.income.selfEmployedIncome}</Text>
      </View>

      {/* Add similar View components for other income categories */}

      <Text style={styles.in}>Total</Text>
      <Text style={styles.out}>${incomeTotal}</Text>

      {/* DEDUCTIONS */}

      <Text style={styles.in}>DEDUCTIONS</Text>

      <View style={styles.rowContainer}>
        <Text style={styles.in}>Business Expenses</Text>
        <Text style={styles.out}>${expenses}</Text>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.in}>Charity Donation</Text>
        <Text style={styles.out}>${other.charitableDonations}</Text>
      </View>

      {/* Add similar View components for other deductions */}

      <Text style={styles.in}>Total</Text>
      <Text style={styles.out}>${deductionTotal}</Text>

      <Text style={styles.in}>NET TAXABLE</Text>
      <Text style={styles.out}>${net}</Text>

      <Text style={styles.in}>Bracket</Text>
      <Text style={styles.out}>{perc * 100}%</Text>

      <Text style={styles.in}>DEBIT (CREDIT)</Text>
      <Text style={styles.out}>${amt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "left",
  },
  in: {
    fontSize: 18,
    textAlign: "left",
  },
  out: {
    fontSize: 18,
    textAlign: "right",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default Summary;
