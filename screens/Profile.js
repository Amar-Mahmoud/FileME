import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton"; // Assuming this is your styled 'Next' button
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";
import { useData } from "../components/DataProvider";

const Profile = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();

 const [firstName, setFirstName] = React.useState(userData.firstName || "");
 const [lastName, setLastName] = React.useState(userData.lastName || "");
 const [dob, setDob] = React.useState(userData.dob || "");

 const handleSave = () => {
  updateUserData({
   firstName,
   lastName,
   dob,
  });
  navigation.navigate("Login");
 };

 return (
  <GradientContainer style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>

   <View style={{ flex: 1, marginTop: "15%" }}>
    <Text style={styles.title}>Profile</Text>
    <View
     style={{
      flexDirection: "row",
      marginTop: 20,
      alignItems: "center",
     }}
    >
     <View style={{ flexDirection: "column" }}>
      <Text style={styles.inputLabel}>First Name</Text>
      <TextInput
       style={{
        ...styles.input,
       }}
       value={firstName}
       onChangeText={setFirstName}
       placeholder=""
      />
      <Text style={{ ...styles.inputLabel, marginTop: 20 }}>Last Name</Text>

      <TextInput
       style={{
        ...styles.input,
       }}
       value={lastName}
       onChangeText={setLastName}
       placeholder=""
      />

      <Text style={{ ...styles.inputLabel, marginTop: 20 }}>Date of Birth</Text>

      <TextInput
       style={{
        ...styles.input,
       }}
       value={dob}
       onChangeText={setDob}
       placeholder=""
      />
     </View>
    </View>
   </View>

   <CustomButton
    style={styles.nextButton}
    onPress={() => handleSave()}
    title="Log Out"
   />
  </GradientContainer>
 );
};

export default Profile;
