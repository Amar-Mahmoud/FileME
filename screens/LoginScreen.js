import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const LoginScreen = ({ navigation }) => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [message, setMessage] = useState(""); // State to store login messages

 const handleLogin = async () => {
  setMessage(""); // Clear previous messages
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
    localStorage.setItem("token", data.token.split(" ")[1]); // Store only the token part, not 'Bearer'
    navigation.navigate("MainPage");
   } else {
    throw new Error(data.message || "An error occurred during login");
   }
  } catch (error) {
   setMessage(error.message); // Set error message to display on the screen
  }
 };

 return (
  <View style={styles.container}>
   <Text style={styles.label}>Email:</Text>
   <TextInput
    value={email}
    onChangeText={setEmail}
    style={styles.input}
    autoCapitalize="none" // Ensure email address is entered in lower case
   />

   <Text style={styles.label}>Password:</Text>
   <TextInput
    value={password}
    onChangeText={setPassword}
    secureTextEntry
    style={styles.input}
   />

   <CustomButton title="Login" onPress={handleLogin} />

   {/* Display message below the button */}
   {message !== "" && <Text style={styles.message}>{message}</Text>}
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  padding: 20,
  width: "100%", // Adjusted for full-width usability
  alignSelf: "center",
 },
 label: {
  marginVertical: 8,
  fontSize: 16,
  color: "#333",
  fontWeight: "bold",
  textTransform: "uppercase",
 },
 input: {
  height: 50,
  borderColor: "#ccc",
  borderWidth: 1,
  marginBottom: 20,
  paddingHorizontal: 15, // Rounded corners
  fontSize: 16,
  backgroundColor: "#fff",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 3,
 },
 message: {
  color: "red", // Error or information messages in red
  fontSize: 16,
  marginTop: 20,
  textAlign: "center",
 },
});

export default LoginScreen;
