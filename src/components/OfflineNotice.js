import React, { PureComponent } from "react";
// Importing UI Components
import { View, Text, Dimensions, StyleSheet } from "react-native";
// Importing module to get Device width
const { width } = Dimensions.get("window");

MiniOfflineSign = () => {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
};

class OfflineNotice extends PureComponent {
  render() {
    return <MiniOfflineSign />;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: "#b52424",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width,
    position: "absolute",
    top: 0
  },
  offlineText: {
    color: "#fff"
  }
});

export default OfflineNotice;
