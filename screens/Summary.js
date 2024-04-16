import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Summary = ({ user, capital, incomeTotal, expenses, other, deductionTotal }) => {
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

      <Text style={styles.in}>Employment</Text>
      <Text style={styles.out}>${employmentIncome}</Text>
      <Text style={styles.in}>Self-Employment</Text>
      <Text style={styles.out}>${selfemploymentIncome}</Text>
      <Text style={styles.in}>Investment</Text>
      <Text style={styles.out}>${investmentincome}</Text>
      <Text style={styles.in}>Pension</Text>
      <Text style={styles.out}>${pensionIncome + rrspIncome}</Text>
      <Text style={styles.in}>Public Benefits</Text>
      <Text style={styles.out}>${governmentBenefits}</Text>
      <Text style={styles.in}>Capital Gain (Loss)</Text>
      <Text style={styles.out}>${capital}</Text>

      <Text style={styles.in}>Total</Text>
      <Text style={styles.out}>${incomeTotal}</Text>

      <Text style={styles.in}>DEDUCTIONS</Text>

      <Text style={styles.in}>Business Expenses</Text>
      <Text style={styles.out}>${expenses}</Text>
      <Text style={styles.in}>Charity Donation</Text>
      <Text style={styles.out}>${charitableDonations}</Text>
      <Text style={styles.in}>Other Deductions</Text>
      <Text style={styles.out}>${other}</Text>

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
});

export default Summary;
