import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 ScrollView,
 Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton"; // Assuming this is your styled 'Next' button
import RadioForm from "react-native-simple-radio-button"; // You might need to install this package
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";
import { useData } from "../components/DataProvider";

const Dependents = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();

 const [dependentFullName, setDependentFullName] = React.useState(
  userData.dependentFullName | " "
 );
 const [dependentSIN, setDependentSIN] = React.useState(userData.dependentSIN | " ");
 const [dependentDOB, setDependentDOB] = React.useState(userData.dependentDOB | " ");
 const [dependentRelationship, setDependentRelationship] = React.useState(
  userData.dependentRelationship | " "
 );
 const [dependentIncome, setDependentIncome] = React.useState(
  userData.dependentIncome | ""
 );


 const handleSave = () => {
  updateUserData({
   dependentFullName,
   dependentSIN,
   dependentDOB,
   dependentRelationship,
   dependentIncome,
  });
  navigation.navigate("ConsentPage");
 };

 const relationshipOptions = [
  { label: "Your Spouse", value: "spouse" },
  { label: "Your Child", value: "child" },
  { label: "Your Elder (family member)", value: "elder" },
  { label: "Impaired / Challenged Dependent", value: "impaired" },
 ];

 const residencyOptions = [
  { label: "Yes they have!", value: "full" },
  { label: "Partially throughout the year!", value: "partial" },
  { label: "No, they haven’t.", value: "none" },
 ];

 return (
  <GradientContainer style={styles.container}>
   <View style={{ justifyContent: "space-between", flex: 1 }}>
    <TouchableOpacity
     style={styles.backButton}
     onPress={() => navigation.goBack()}
    >
     <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
    </TouchableOpacity>

    <ScrollView
     contentContainerStyle={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
     }}
    >
     <View style={{ padding: 10 }}>
      <View style={styles.inputContainer}>
       <Text style={styles.inputLabel}>First and Last Name</Text>
       <TextInput
        style={styles.input}
        value={dependentFullName}
        onChangeText={setDependentFullName}
        placeholder=""
        keyboardType="number-pad"
       />
       <Text style={styles.inputLabel}>SIN</Text>
       <TextInput
        style={styles.input}
        value={ dependentSIN}
        onChangeText={setDependentSIN}
        placeholder="XXX-XXX-XXX"
        keyboardType="number-pad"
       />

       <Text style={styles.inputLabel}>Date of Birth</Text>
       <TextInput
        style={styles.input}
        value={dependentDOB}
        onChangeText={setDependentDOB}
        placeholder="YYYY-MM-DD"
        keyboardType="number-pad"
       />

       <View style={styles.inputContainer}>
        <RadioForm
         radio_props={relationshipOptions}
         initial={-1}
         onPress={setDependentRelationship}
         buttonColor={"#2196f3"}
         selectedButtonColor={"#2196f3"}
        />
       </View>

       <Text style={styles.inputLabel}>Income</Text>
       <TextInput
        style={styles.input}
        value={dependentIncome}
        onChangeText={setDependentIncome}
        placeholder=""
        keyboardType="number-pad"
       />
      </View>
     </View>
    </ScrollView>

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

export default Dependents;
