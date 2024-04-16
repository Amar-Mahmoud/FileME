import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Image,
 route,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import CustomButton from "../components/CustomButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";

const VerifyEmail2 = ({ route }) => {
 const navigation = useNavigation();
 const [phone, setPhone] = useState("");
 const { email } = route.params;

 return (
  <GradientContainer style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>

   <View style={{ justifyContent: "center", marginTop: "20%" }}>
    <Text style={styles.title}>Verify your email</Text>
    <Text style={styles.inputLabel}>
     Please check our inbox and tap the link in the email we’ve just sent to:
    </Text>
    <View style={{ justifyContent: "space-between", flexDirection: "row", marginTop: "5%"  }}>
     <Text style={{ fontWeight: "bold", fontSize: 18, }}>
      {email}
     </Text>
     {Resend()}
    </View>
   </View>


   <View>
   {DoItLater()}
   <CustomButton
    style={styles.nextButton}
    onPress={() => navigation.navigate("EmailVerified")}
    title="Open email"
   />
   
   </View>
  </GradientContainer>
 );

 function Resend() {
  return (
   <Text
    onPress={() => navigation.navigate("VerifyEmail")}
    style={{ fontWeight: "bold", fontSize: 14, marginTop: 5, color: "#3A45AD" }}
   >
    Resend it
   </Text>
  );
 }

 function DoItLater() {
    return (
     <Text
      onPress={() => navigation.navigate("EmailVerified")}
      style={{ fontWeight: "bold", fontSize: 14, marginTop: 5, color: "#3A45AD", textAlign:"center" }}
     >
      I'll do it later
     </Text>
    );
   }
};

export default VerifyEmail2;
