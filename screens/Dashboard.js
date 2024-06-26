import React from "react";
import {
 View,
 Text,
 Image,
 Button,
 ScrollView,
 StyleSheet,
 TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import CustomButton from "../components/CustomButton";

const Dashboard = () => {
 const navigation = useNavigation();

 return (
  <View style={styles.container}>
   <View style={styles2.header}>
    <TouchableOpacity style={styles2.hamburger}>
     <View style={styles2.line} />
     <View style={styles2.line} />
     <View style={styles2.line} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
     <Image
      style={styles2.icon}
      source={require("../assets/profileIcon.png")}
     />
    </TouchableOpacity>
   </View>
   <ScrollView>
    <Text style={styles2.netIncomeTitle}>Net Income In 2023</Text>
    <Text style={styles2.netIncomeValue}>$19,219.85</Text>
    <ScrollView
     horizontal={true}
     style={styles2.horizontalScroll}
     showsHorizontalScrollIndicator={true}
    >
     <Image
      style={styles2.yellowBox}
      source={require("../assets/yellowBox.png")}
     />
     <Image source={require("../assets/blueBox.png")} />
     <Image source={require("../assets/orangeBox.png")} />
     <Image source={require("../assets/pinkBox.png")} />
    </ScrollView>
    <Image source={require("../assets/taxGraph.png")} />

     <CustomButton
      title={"Start An Application"}
      onPress={() => {
       navigation.navigate("ProvideInfoScreen");
      }}
     />
   </ScrollView>
  </View>
 );
};

const styles2 = StyleSheet.create({
 pageContainer: {
  flex: 1,
  backgroundColor: "#EEFFFF",
 },
 container: {
  flex: 1,
 },
 horizontalScroll: {
  flexDirection: "row",
 },
 header: {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 10,
  alignItems: "center",
 },
 hamburger: {
  width: 40,
  justifyContent: "center",
  alignItems: "center",
 },
 line: {
  height: 3,
  backgroundColor: "black",
  marginVertical: 2,
  width: 25,
 },
 icon: {
  width: 40,
  height: 40,
  borderRadius: 20,
 },
 netIncomeTitle: {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 18,
  marginVertical: 10,
 },
 netIncomeValue: {
  textAlign: "center",
  fontSize: 36,
  fontWeight: "bold",
  color: "#333",
 },
 images: {
  flexDirection: "row",
  justifyContent: "space-around",
  marginVertical: 10,
 },
 statBox: {
  width: 80,
  height: 100,
  resizeMode: "contain",
 },
 taxGraph: {
  width: "80%",
  height: undefined,
  aspectRatio: 1,
 },
 startButton: {
  backgroundColor: "#003366",
  borderRadius: 25,
  width: "50%",
  alignSelf: "center",
  paddingVertical: 15,
  marginBottom: 20,
  marginTop: 10,
 },
 startButtonText: {
  color: "white",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 18,
 },
 yellowBox: {
  width: 271,
  height: 371,
  resizeMode: "contain",
 },
});

export default Dashboard;
