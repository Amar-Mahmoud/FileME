import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import Notification from "../components/Notification";
import styles from "../styles";

const LandingPage = () => {
 const navigation = useNavigation();
 const [taxTips, setTaxTips] = useState([]);
 const [currentTip, setCurrentTip] = useState(0);

 useEffect(() => {
  const fetchTaxTips = async () => {
   const tips = [
    {
     id: 1,
     tip: "Maximize contributions to your RRSP (Registered Retirement Savings Plan) to reduce taxable income.",
    },
    {
     id: 2,
     tip: "Keep detailed records of all income, deductions, and credits to simplify the tax filing process and support claims during audits.",
    },
    {
     id: 3,
     tip: "Deduct eligible home office expenses if you work from home, including a portion of utilities, property taxes, and maintenance costs.",
    },
    {
     id: 4,
     tip: "Utilize all available tax credits, such as the Child Care Expense Deduction in Canada or the Child and Dependent Care Credit in the U.S., to lower your tax bill.",
    },
    {
     id: 5,
     tip: "File your taxes on or before the deadline to avoid penalties and interest; file early if you expect a refund to receive it sooner.",
    },
    {
     id: 6,
     tip: "Adjust your tax withholdings if you consistently owe money at tax time or receive a large refund to better manage your cash flow throughout the year.",
    },
    {
     id: 7,
     tip: "Consider hiring a tax professional if your tax situation is complex, especially if you have multiple income streams, significant investments, or own a business.",
    },
    {
     id: 8,
     tip: "Make charitable contributions to registered charities and keep all receipts to claim this deduction and reduce your taxable income.",
    },
    {
     id: 9,
     tip: "Claim all eligible medical expenses that exceed a certain threshold of your net income, including travel expenses for medical treatment not available locally.",
    },
    {
     id: 10,
     tip: "Invest in tax-efficient investment vehicles like TFSAs (Tax-Free Savings Accounts) in Canada where earnings and withdrawals do not attract taxes.",
    },
   ];

   setTaxTips(tips);
  };

  fetchTaxTips();

  const timer = setInterval(() => {
   setCurrentTip((currentTip) => (currentTip + 3) % taxTips.length);
  }, 10000);

  return () => clearInterval(timer);
 }, [taxTips.length]);

 React.useLayoutEffect(() => {
  navigation.setOptions({
   headerRight: () => (
    <View style={styles.headerButtons}>
     <SecondaryButton
      style={styles.buttonStyle}
      onPress={() => navigation.navigate("MyAccount")}
      title="My Account"
      color="#000"
     />
    </View>
   ),
  });
 }, [navigation]);

 return (
  <View style={styles.container}>
   <View style={styles.leftColumn}>
    <Text style={styles.sectionTitle}>Tax Tip</Text>

    <View style={styles.upperLeftBox}>
     <ScrollView>
      <Notification
       style={styles.boxText}
       title={
        taxTips.length > 0
         ? taxTips[currentTip % taxTips.length].tip
         : "Loading tips..."
       }
      ></Notification>
      <Notification
       style={styles.boxText}
       title={
        taxTips.length > 0
         ? taxTips[(currentTip + 1) % taxTips.length].tip
         : "Loading tips..."
       }
      ></Notification>
      <Notification
       style={styles.boxText}
       title={
        taxTips.length > 0
         ? taxTips[(currentTip + 2) % taxTips.length].tip
         : "Loading tips..."
       }
      ></Notification>
     </ScrollView>
    </View>
    <Text style={styles.sectionTitle}>{"Notifications"}</Text>

    <View style={styles.lowerLeftBox}>
     <ScrollView>
      <Notification
       style={styles.boxText}
       title={"Tax Season is Here, file by April 30th to avoid penalties."}
      ></Notification>
     </ScrollView>
    </View>
   </View>
   <View style={styles.rightColumnB}>
    <Text style={styles.sectionTitle}>{"Mail"}</Text>

    <View style={styles.rightColumn}>
     <Text style={{ alignSelf: "center" }}>{"No Items Here"}</Text>
    </View>
   </View>
  </View>
 );
};


export default LandingPage;
