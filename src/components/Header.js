import React from "react";
// Importing UI Components
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    display: "flex",
    padding: 20,
    backgroundColor: "#3B4249"
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
});

export default Header;
