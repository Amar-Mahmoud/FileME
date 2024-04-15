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


<Text style={styles.title}>Summary</Text>

<Text style={styles.in}>INCOME</Text>

<Text style={styles.in}>Employment</Text>
<Text style={styles.out}>$0.00</Text>
<Text style={styles.in}>Self-Employment</Text>
<Text style={styles.out}>$0.00</Text>
<Text style={styles.in}>Investment</Text>
<Text style={styles.out}>$0.00</Text>
<Text style={styles.in}>Pension</Text>
<Text style={styles.out}>$0.00</Text>
<Text style={styles.in}>Public Benefits</Text>
<Text style={styles.out}>$0.00</Text>
<Text style={styles.in}>Capital Gain (Loss)</Text>
<Text style={styles.out}>$0.00</Text>

<Text style={styles.in}>Total</Text>
<Text style={styles.out}>$0.00</Text>

<Text style={styles.in}>DEDUCTIONS</Text>

<Text style={styles.in}>Business Expenses</Text>
<Text style={styles.out}>$0.00</Text>
<Text style={styles.in}>Charity Donation</Text>
<Text style={styles.out}>$0.00</Text>
<Text style={styles.in}>Other Deductions</Text>
<Text style={styles.out}>$0.00</Text>

<Text style={styles.in}>Total</Text>
<Text style={styles.out}>$0.00</Text>

<Text style={styles.in}>NET TAXABLE</Text>
<Text style={styles.out}>$0.00</Text>
<Text style={styles.in}>Bracket</Text>
<Text style={styles.out}>0%</Text>

<Text style={styles.in}>DEBIT (CREDIT)</Text>
<Text style={styles.out}>$0.00</Text>

const styles = StyleSheet.create({

 title: {
  fontSize: 34,
  fontWeight: "bold",
  textAlign: "left",
 },

 in: {
  fontSize: 18,
  textAlign: "left",
 }
 out: {
  fontSize: 18,
  textAlign: "right",
 }

});

export default Summary;
