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
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";

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
      <Image
       resizeMode="contain"
       source={require("../assets/progress_2_3.png")}
      />
     </View>
     <ScrollView contentContainerStyle={{}}>
      <View style={{ padding: 15 }}>
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
        What are your Travel Expenses (including flights and accommodations
        while traveling for business) ?
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
      </View>
     </ScrollView>

     <CustomButton
      style={{ ...styles.nextButton, bottom: 0 }}
      onPress={() => {
       navigation.navigate("LetsFinish");
      }}
      title="Next"
     />
    </View>
   </View>
  </GradientContainer>
 );
};

export default BusinessPage;
