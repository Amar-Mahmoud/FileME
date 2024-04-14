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
import CustomButton from "../components/CustomButton";
import SecondaryButton from "../components/SecondaryButton";
import RadioForm from "react-native-simple-radio-button";

const BusinessPage = () => {
 const navigation = useNavigation();
 const [business, setBusiness] = useState(false);
 const [formData, setFormData] = useState({
  business,
  homeofficeexpenses: 0,
  motorvehicleexpenses: 0,
  supplies: 0,
  travel: 0,
  tools: 0,
 });

 const handleSubmit = () => {
  // Process formData here or navigate to the next screen
  console.log(formData);
  // navigation.navigate('NextScreen', { formData }); // Example navigation
 };

 // A function to update form data
 const handleInputChange = (name, value) => {
  setFormData((prevState) => ({
   ...prevState,
   [name]: value,
  }));
 };

 return (
  <ScrollView contentContainerStyle={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>
   <ScrollView
    contentContainerStyle={{ justifyContent: "center", marginTop: "15%" }}
    showsVerticalScrollIndicator="false"
   >
    <Text style={styles.title}>Do you have a business?</Text>
    <Text style={styles.subtitle}>
     Do you have a Registered business with the governmenet?
    </Text>
    <View style={styles.inputContainer}>
     <SecondaryButton
      onPress={() => {
       setBusiness(true);
      }}
      title="Yes"
     />
     <SecondaryButton
      onPress={() => {
       setBusiness(false);
      }}
      title="No"
     />
    </View>
    <Text style={styles.subtitle}>
     What are your Home Office Expenses (including supplies and electricity)?
    </Text>

    <TextInput
     style={styles.input}
     placeholder="$ 0.00"
     value={formData.homeofficeexpenses}
     onChangeText={(text) => handleInputChange("homeofficeexpenses", text)}
     keyboardType="number-pad"
    />
    <Text style={styles.subtitle}>
     What are your Motor Vehicle Expenses (including payments for the vehicle
     and gas) ?
    </Text>

    <TextInput
     style={styles.input}
     placeholder="$ 0.00"
     value={formData.motorvehicleexpenses}
     onChangeText={(text) => handleInputChange("motorvehicleexpenses", text)}
     keyboardType="number-pad"
    />

    <Text style={styles.subtitle}>
     What are your Supplies Expenses (including stock, etc.) ?
    </Text>

    <TextInput
     style={styles.input}
     placeholder="$ 0.00"
     value={formData.supplies}
     onChangeText={(text) => handleInputChange("supplies", text)}
     keyboardType="number-pad"
    />

    <Text style={styles.subtitle}>
     What are your Travel Expenses (including flights and accommodations while
     traveling for business) ?
    </Text>

    <TextInput
     style={styles.input}
     placeholder="$ 0.00"
     value={formData.travel}
     onChangeText={(text) => handleInputChange("travel", text)}
     keyboardType="number-pad"
    />

    <Text style={styles.subtitle}>
     What are your Tools Expenses (including machinery or any rented
     technologies) ?
    </Text>

    <TextInput
     style={styles.input}
     placeholder="$ 0.00"
     value={formData.tools}
     onChangeText={(text) => handleInputChange("tools", text)}
     keyboardType="number-pad"
    />
   </ScrollView>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("ConsentPage");
    }}
    title="Next"
   />
  </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#DAFFFF",
  padding: 20,
  paddingTop: 20,
  justifyContent: "space-between",
 },
 backButton: {
  position: "absolute",
  top: 10,
  marginVertical: "auto",
  margin: 10,
  left: 10,
 },
 indicatorContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 20,
 },

 logo: {
  marginVertical: 20,
  padding: 20,
 },
 title: {
  fontSize: 34,
  fontWeight: "bold",
  textAlign: "left",
 },
 subtitle: {
  fontSize: 20,
  textAlign: "left",
  fontWeight: "bold",
  marginVertical: 10,
  color: "gray",
 },
 inputContainer: {
  marginBottom: 20,
  marginTop: 20,
  alignSelf: "center",
  justifyContent: "space-between",
  flexDirection: "row",
 },
 inputLabel: {
  fontSize: 18,
 },
 input: {
  height: 50,
  backgroundColor: "#fff",
  borderWidth: 1,
  borderColor: "gray",
  borderRadius: 10,
  paddingHorizontal: 10,
  fontSize: 18,
  marginTop: 5,
 },
 startButton: {
  position: "absolute",
  bottom: 20,
  left: 0,
  right: 0,
  paddingHorizontal: 60,
  paddingVertical: 15,
  borderRadius: 30,
  backgroundColor: "#0000ff",
 },
});

export default BusinessPage;
