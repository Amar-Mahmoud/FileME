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
import { useData } from "../components/DataProvider";


const BusinessPage = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();

 const [business, setBusiness] = React.useState(
  userData.business | false
 );
 const [homeOffice, setHomeOffice] = React.useState(userData.homeOffice | 0);
 const [vehicle, setvehicle] = React.useState(userData.vehicle | 0);
 const [supplies, setSupplies] = React.useState(
  userData.supplies | 0
 );
 const [travel, setTravel] = React.useState(
  userData.travel | 0
 );
 const [tools, setTools] = React.useState(
   userData.tools | 0
  );


 const handleSave = () => {
  updateUserData({
   business,
   homeOffice,
   vehicle,
   supplies,
   travel,
   tools,

  });
  navigation.navigate("LetsFinish");
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
      marginTop: "10%"
     }}
    >

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
        value={homeOffice}
        onChangeText={setHomeOffice}
        keyboardType="number-pad"
       />
       <Text style={styles.subtitle}>
        What are your Motor Vehicle Expenses (including payments for the vehicle
        and gas) ?
       </Text>

       <TextInput
        style={styles.input}
        placeholder="$ 0.00"
        value={vehicle}
        onChangeText={setvehicle}
        keyboardType="number-pad"
       />

       <Text style={styles.subtitle}>
        What are your Supplies Expenses (including stock, etc.) ?
       </Text>

       <TextInput
        style={styles.input}
        placeholder="$ 0.00"
        value={supplies}
        onChangeText={setSupplies}
        keyboardType="number-pad"
       />

       <Text style={styles.subtitle}>
        What are your Travel Expenses (including flights and accommodations
        while traveling for business) ?
       </Text>

       <TextInput
        style={styles.input}
        placeholder="$ 0.00"
        value={travel}
        onChangeText={setTravel}
        keyboardType="number-pad"
       />

       <Text style={styles.subtitle}>
        What are your Tools Expenses (including machinery or any rented
        technologies) ?
       </Text>

       <TextInput
        style={styles.input}
        placeholder="$ 0.00"
        value={tools}
        onChangeText={setTools}
        keyboardType="number-pad"
       />
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
   </View>
  </GradientContainer>
 );
};

export default BusinessPage;
