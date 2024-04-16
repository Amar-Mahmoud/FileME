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
import { useData } from "../components/DataProvider";

const CreatePassword = () => {
 const navigation = useNavigation();
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);
 const { userData, updateUserData } = useData();
 const [password, setPassword] = React.useState(userData.password || "");

 const handleSave = () => {
    updateUserData({ password });
    navigation.navigate("PasswordCreated")
};

 return (
  <GradientContainer style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>

   <View style={{ justifyContent: "center", marginTop: "20%" }}>
    <Text style={styles.title}>Create your password</Text>
    <Text style={{...styles.subHeadline2, textAlign: "left"}}>Choose a password</Text>

    <View
     style={{
      flexDirection: "row",
      marginTop: 20,
      alignItems: "center",
      position: "relative",
     }}
    >
     <TextInput
      style={{
       ...styles.input,
       paddingRight: 40,
       paddingLeft: 10,
      }}
      value={password}
      onChangeText={setPassword}
      placeholder="Enter password"
      secureTextEntry={!isPasswordVisible}
     />
     <TouchableOpacity
      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
      style={{
       position: "absolute",
       right: 10,
       height: 40,
       justifyContent: "center",
       padding: 10,
      }}
     >
      <Octicons
       name={isPasswordVisible ? "eye-closed" : "eye"}
       size={20}
       color="grey"
      />
     </TouchableOpacity>
    </View>
    <Text style={{...styles.subHeadline2, textAlign: "left", fontWeight: '300', margintop: 20}}>
     At least 8 characters, containing a letter and a number
    </Text>
   </View>

   <CustomButton
    style={styles.nextButton}
    onPress={() => handleSave()}
    title="Done"
   />
  </GradientContainer>
 );
};

export default CreatePassword;
