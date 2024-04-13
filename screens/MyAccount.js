import React, { useState, useEffect } from "react";
import {
 View,
 Text,
 StyleSheet,
 ScrollView,
 ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import AsyncStorage from '@react-native-async-storage/async-storage';


const LandingPage = () => {
 const navigation = useNavigation();
 const [userInfo, setUserInfo] = useState(null);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 useEffect(() => {
  const fetchUserInfo = async () => {
   setIsLoading(true);
   try {
    const userToken = await AsyncStorage.getItem("userToken");
    const response = await fetch("http://localhost:3001/userinfo", {
     method: "GET",
     headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
     },
    });
    const data = await response.json();
    if (response.ok) {
     setUserInfo(data);
    } else {
     throw new Error(data.message || "Failed to fetch user info");
    }
   } catch (error) {
    console.error("Error fetching user info:", error);
    setError(error.message || "Error fetching data");
   } finally {
    setIsLoading(false);
   }
  };

  fetchUserInfo();
 }, []);

 return (
  <View style={styles.container}>
   <View style={styles.leftColumn}>
    <Text style={styles.sectionTitle}>Tax Tip</Text>
    <View style={styles.upperLeftBox}>{/* Placeholder for tax tips */}</View>
    <Text style={styles.sectionTitle}>Notifications</Text>
    <View style={styles.lowerLeftBox}>
     {/* Placeholder for notifications */}
    </View>
   </View>
   <View style={styles.rightColumnB}>
    <Text style={styles.sectionTitle}>Personal Information</Text>
    <View style={styles.rightColumn}>
     <ScrollView>
      {isLoading ? (
       <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
       <Text style={styles.boxText}>{error}</Text>
      ) : userInfo ? (
       <>
        <Text style={styles.boxText}>
         Name: {userInfo.firstName} {userInfo.lastName}
        </Text>
        <Text style={styles.boxText}>Email: {userInfo.email}</Text>
        <Text style={styles.boxText}>Phone: {userInfo.phone}</Text>
        <Text style={styles.boxText}>
         Address: {userInfo.address.streetAddress1}{" "}
         {userInfo.address.streetAddress2}
        </Text>
        <Text style={styles.boxText}>City: {userInfo.address.city}</Text>
        <Text style={styles.boxText}>
         Postal Code: {userInfo.address.postalCode}
        </Text>
       </>
      ) : (
       <Text style={styles.boxText}>No user information available.</Text>
      )}
     </ScrollView>
    </View>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection: "row",
  padding: 20,
 },
 leftColumn: {
  flex: 1,
  marginRight: 10,
 },
 rightColumnB: {
  flex: 2,
 },
 rightColumn: {
  flex: 2,
  backgroundColor: "#fff",
  elevation: 4,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  padding: 10,
  borderRadius: 5,
 },
 upperLeftBox: {
  flex: 1,
  marginBottom: 10,
  backgroundColor: "#fff",
  elevation: 4,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
 },
 lowerLeftBox: {
  flex: 1,
  backgroundColor: "#fff",
  elevation: 4,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
 },
 sectionTitle: {
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 5,
  color: "#333",
 },
 boxText: {
  alignSelf: "flex-start",
  fontSize: 16,
  marginHorizontal: 10,
  fontWeight: "400",
 },
 headerButtons: {
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginRight: "2%",
  width: 200,
 },
 buttonStyle: {
  fontSize: 16,
 },
});

export default LandingPage;
