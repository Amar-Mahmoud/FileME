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

const LoginScreen = ({ navigation }) => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const [message, setMessage] = useState("");
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 const handleLogin = async () => {
  setMessage("");
  try {
   const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
   });

   const data = await response.json();

   if (response.status === 200) {
    localStorage.setItem("token", data.token.split(" ")[1]);
    setEmail("");
    navigation.navigate("Dashboard");
   } else {
    throw new Error(data.message || "An error occurred during login");
   }
  } catch (error) {
   setMessage(error.message);
  }
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
    <Text style={styles.title}>Sign in</Text>
    <View
     style={{
      flexDirection: "row",
      marginTop: 20,
      alignItems: "center",
     }}
    >
     <View style={{ flexDirection: "column" }}>
      <Text style={styles.inputLabel}>Your email address / Phone number</Text>
      <TextInput
       style={{
        ...styles.input,
       }}
       value={email}
       onChangeText={setEmail}
       placeholder=""
      />
      <Text style={{ ...styles.inputLabel, marginTop: 20 }}>Password</Text>

      <TextInput
       style={{
        ...styles.input,
       }}
       value={password}
       onChangeText={setPassword}
       placeholder=""
       secureTextEntry={!isPasswordVisible}
      />
     </View>
    </View>
   </View>

   {message ? <Text style={styles.errorMessage}>{message}</Text> : null}

   <CustomButton
    style={styles.nextButton}
    onPress={() => handleLogin()}
    title="Sign in"
   />
  </GradientContainer>
 );
};

export default LoginScreen;
