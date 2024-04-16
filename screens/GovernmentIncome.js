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

const GovernmentIncome = () => {
 const navigation = useNavigation();
 const [govIncome, setGovIncome] = useState();

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
       source={require("../assets/progress_2_5.png")}
      />
     </View>
     <View style={{ padding: 15 }}>
      <Text style={styles.title}>Does the Government Give You Any Income?</Text>
      <Text style={styles.subtitle}>
       Do you receive from government programs like EI or social assistance?
      </Text>

      <View style={styles.inputContainer}>
       <Text style={styles.inputLabel}>Government Plan Income</Text>
       <TextInput
        style={styles.input}
        value={govIncome}
        onChangeText={setGovIncome}
        placeholder="$ 0.00"
        keyboardType="number-pad"
       />
      </View>
     </View>
    </View>
   </View>

   <CustomButton
    style={{ ...styles.nextButton, bottom: 0 }}
    onPress={() => {
     navigation.navigate("ExpenseContinue");
    }}
    title="Next"
   />
  </GradientContainer>
 );
};

export default GovernmentIncome;
