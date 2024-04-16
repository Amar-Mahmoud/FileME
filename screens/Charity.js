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

const RegisteredInvestmentAccounts = () => {
 const navigation = useNavigation();
const [donation, setDonation] = useState();
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
      <Image resizeMode="contain" source={require("../assets/progress1.png")} />
     </View>
     <ScrollView contentContainerStyle={{}}>
      <View style={{ padding: 15 }}>
       <Text style={styles.title}>Have you given any money to Charity?</Text>
       <Text style={styles.subtitle}>
        Donations are tax deductible! Enter the total amount of donations you
        have given this year
       </Text>

       <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
        Charitable Donations
        </Text>
        <TextInput
         style={styles.input}
         value={donation}
         onChangeText={setDonation}
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
      navigation.navigate("DeductionLimit");
     }}
     title="Next"
    />
   </View>
  </GradientContainer>
 );
};

export default RegisteredInvestmentAccounts;
