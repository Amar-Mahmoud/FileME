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
import GradientContainer from "../components/GradientContainer";
import Octicons from "react-native-vector-icons/Octicons";

const TellUsMore = () => {
 const navigation = useNavigation();
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");

 return (
  <GradientContainer style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>

   <View style={{ justifyContent: "center", marginTop: "20%" }}>
    <Text style={styles.title}>Lastly, tell us more about yourself</Text>
    <Text style={{ ...styles.subHeadline2, textAlign: "left" }}>
     Please enter your legal name. This information will be used to verify your
     account.
    </Text>

    <View
     style={{
      flexDirection: "column",
      marginTop: 20,
      paddingVertical: 10,
     }}
    >
     <Text style={{...styles.subHeadline2, textAlign: "left"}}>First Name</Text>
     <TextInput
      style={{
       ...styles.input,
       paddingRight: 40,
       paddingLeft: 10,
      }}
      value={firstName}
      onChangeText={setFirstName}
      placeholder=""
     />
     <Text style={{...styles.subHeadline2, textAlign: "left"}}>Last Name</Text>
     <TextInput
      style={{
       ...styles.input,
       paddingRight: 40,
       paddingLeft: 10,
      }}
      value={lastName}
      onChangeText={setLastName}
      placeholder=""
     />
    </View>
   </View>

   <CustomButton
    style={styles.nextButton}
    onPress={() => navigation.navigate("TellUsMore2")}
    title="Done"
   />
  </GradientContainer>
 );
};

export default TellUsMore;
