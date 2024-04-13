import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import CustomButton from "../components/CustomButton";

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDOB] = useState("");
  const [sin, setSIN] = useState("");
  const [streetAddress1, setStreetAddress1] = useState("");
  const [streetAddress2, setStreetAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");

  const validateInput = () => {
    if (!firstName || !lastName || !email || !password || !dob || !sin || !city || !postalCode) {
      setMessage("Please ensure all required fields are filled out.");
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (!validateInput()) return;

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
          dob,
          sin,
          address: {
            streetAddress1,
            streetAddress2,
            city,
            postalCode
          }
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        navigation.navigate("MainPage");
      } else {
        throw new Error(data.message || "An error occurred during signup");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            value={dob}
            onChangeText={setDOB}
            style={styles.input}
          />

          <Text style={styles.label}>City</Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            style={styles.input}
          />
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <Text style={styles.label}>SIN</Text>
          <TextInput
            value={sin}
            onChangeText={setSIN}
            secureTextEntry
            style={styles.input}
          />

          <Text style={styles.label}>Postal Code</Text>
          <TextInput
            value={postalCode}
            onChangeText={setPostalCode}
            style={styles.input}
          />
        </View>
      </View>

      <Text style={styles.label}>Street Address 1</Text>
      <TextInput
        value={streetAddress1}
        onChangeText={setStreetAddress1}
        style={styles.fullWidthInput}
      />

      <Text style={styles.label}>Street Address 2</Text>
      <TextInput
        value={streetAddress2}
        onChangeText={setStreetAddress2}
        style={styles.fullWidthInput}
      />

      <View style={styles.buttonContainer}>
        <CustomButton title="Sign Up" onPress={handleSignup} />
        <CustomButton
          title="Already a user? Click here to login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <Text style={styles.message}>{message}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "48%", // Allows for spacing between columns
  },
  buttonContainer: {
    marginTop: 20,
  },
  label: {
    marginBottom: 8,
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
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  fullWidthInput: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: "100%", // Full width for single column inputs
  },
  message: {
    color: "red",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});

export default SignupScreen;
