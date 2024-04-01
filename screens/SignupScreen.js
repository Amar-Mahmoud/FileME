import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          age
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        Alert.alert("Success", "Signup successful");
      } else {
        throw new Error(data.message || "An error occurred during signup");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <TextInput value={firstName} onChangeText={setFirstName} style={styles.input} />

      <Text style={styles.label}>Last Name</Text>
      <TextInput value={lastName} onChangeText={setLastName} style={styles.input} />

      <Text style={styles.label}>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttoncontainer}>
        <CustomButton
          title={"Sign up"}
          onPress={() => handleSignup()}
        ></CustomButton>

        <CustomButton
          title={"Already a user? Click here to login"}
          onPress={() => navigation.navigate("Login")}
        ></CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    width: "50%",
    alignSelf: "center",
  },
  buttoncontainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    alignSelf: "center",
  },
  label: {
    marginVertical: 10,
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SignupScreen;
