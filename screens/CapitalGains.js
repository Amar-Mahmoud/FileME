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

const DeductionLimit = () => {
 const navigation = useNavigation();
    const { userData, updateUserData } = useData();

 const [totalprofit, setTotalProfit] = useState( userData.totalprofit || "");
 const [totalloss, setTotalLoss] = useState( userData.totalloss || "");

    const handleSave = () => {
        updateUserData({ totalprofit, totalloss });
        navigation.navigate("CapitalGains2");
    }


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
      <Image resizeMode="contain" source={require("../assets/progress3.png")} />
     </View>
     <ScrollView contentContainerStyle={{}}>
      <View style={{ padding: 15 }}>
       <Text style={styles.title}>Do you have any Capital Gains?</Text>
       <Text style={styles.subtitle}>
        Did you sell any stocks for a PROFIT or a LOSS?
       </Text>

       <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
         What is the TOTAL PROFIT in your Stock Sales?
        </Text>
        <TextInput
         style={styles.input}
         value={totalprofit}
         onChangeText={setTotalProfit}
         placeholder="$ 0.00"
         keyboardType="number-pad"
        />

        <Text style={styles.inputLabel}>
         What is the TOTAL LOSS in your Stock Sales?
        </Text>
        <TextInput
         style={styles.input}
         value={totalloss}
         onChangeText={setTotalLoss}
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
        handleSave();
     }}
     title="Next"
    />
   </View>
  </GradientContainer>
 );
};

export default DeductionLimit;
