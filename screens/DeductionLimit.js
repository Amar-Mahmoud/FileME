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

 const [rrspcontrib, setRRSPContrib] = useState();
 const [tuition, setTuition] = useState();
 const [deduc, setDeduc] = useState();

 const handleSave = () => {
  updateUserData({ rrspcontrib, tuition, deduc });
  navigation.navigate("CapitalGains");
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
      <Image resizeMode="contain" source={require("../assets/progress2.png")} />
     </View>
     <ScrollView contentContainerStyle={{}}>
      <View style={{ padding: 15 }}>
       <Text style={styles.title}>Do you have any Deduction Limits?</Text>
       <Text style={styles.subtitle}>
        If you have any unused RRSP contributions, tuition carryforwards, and
        other deductions.
       </Text>

       <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Unused RRSP Contributtions</Text>
        <TextInput
         style={styles.input}
         value={rrspcontrib}
         onChangeText={setRRSPContrib}
         placeholder=""
         keyboardType="number-pad"
        />

        <Text style={styles.inputLabel}>Tuition Carryforwards</Text>
        <TextInput
         style={styles.input}
         value={tuition}
         onChangeText={setTuition}
         placeholder=""
         keyboardType="number-pad"
        />

        <Text style={styles.inputLabel}>Any other Deductions</Text>
        <TextInput
         style={styles.input}
         value={deduc}
         onChangeText={setDeduc}
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
