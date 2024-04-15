import { StyleSheet } from "react-native";

export default StyleSheet.create({
 defaultFontFamily: {
  fontFamily: "SourceSansPro-Regular",
 },
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
  margin: 10,
  left: 10,
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
  color: "gray",
 },
 headline: {
  fontSize: 34,
  fontWeight: "bold",
  textAlign: "center",
 },
 subHeadline: {
  fontSize: 24,
  textAlign: "center",
  fontWeight: "bold",
  color: "#3A45AD",
 },
 inputContainer: {
  marginBottom: 20,
  marginTop: 20,
  justifyContent: "space-between",
  flexDirection: "column",
 },
 inputLabel: {
  fontSize: 18,
 },
 input: {
  height: 60,
  borderWidth: 1,
  borderColor: "lightgray",
  borderRadius: 10,
  paddingHorizontal: 10,
  fontSize: 18,
  backgroundColor: "#fff",
  marginTop: 5,
  
 },
 startButton: {
  position: "absolute",
  bottom: 20,
  margin: "auto",
  left: 0,
  right: 0,
  paddingHorizontal: 30,
  paddingVertical: 15,
  borderRadius: 30,
  backgroundColor: "#0000ff",
 },

 statusBarPlaceholder: {
  height: 10,
 },
 indicatorContainer: {
  flexDirection: "row",
  justifyContent: "center",
  top: -35,
  paddingVertical: 10,
 },
 indicator: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: "#dcdcdc",
  marginHorizontal: 5,
 },
 activeIndicator: {
  width: 25,
  backgroundColor: "#0000ff",
 },
 logo: {
  width: "100%",
  height: 250,
  marginVertical: 30,
 },

 button: {
  backgroundColor: "#fff",
  paddingVertical: 12,
  paddingHorizontal: 50,
  borderRadius: 5,
  marginVertical: 10,
  elevation: 8,
 },
 buttonText: {
  color: "#007B5D",
  fontSize: 20,
  fontWeight: "bold",
  alignSelf: "center",
  fontFamily: "SourceSansPro-Regular",
  textTransform: "uppercase",
 },
});
