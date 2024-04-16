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

 const [totalprofitproperty, setTotalProfitProperty] = useState(userData.totalprofitproperty || "");
 const [totallossproperty, setTotalLossProperty] = useState(userData.totallossproperty || "");

 const handleSave = () => {
  updateUserData({ totalprofitproperty, totallossproperty });
  navigation.navigate("FinishPage");
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
      <Image resizeMode="contain" source={require("../assets/progress4.png")} />
     </View>
     <ScrollView contentContainerStyle={{}}>
      <View style={{ padding: 15 }}>
       <Text style={styles.title}>Do you have any Capital Gains?</Text>
       <Text style={styles.subtitle}>
        Did you sell any PROPERTY for a PROFIT or a LOSS?
       </Text>

       <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
         What is the TOTAL PROFIT in your Property Sales?
        </Text>
        <TextInput
         style={styles.input}
         value={totalprofitproperty}
         onChangeText={setTotalProfitProperty}
         placeholder=""
         keyboardType="number-pad"
        />

        <Text style={styles.inputLabel}>
         What is the TOTAL LOSS in your Property Sales?
        </Text>
        <TextInput
         style={styles.input}
         value={totallossproperty}
         onChangeText={setTotalLossProperty}
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

export default DeductionLimit;
