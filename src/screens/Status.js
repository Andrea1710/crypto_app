import React, { Component } from "react";
// Importing UI Components
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
// Importing Connection Info
import NetInfo from "@react-native-community/netinfo";

class Status extends Component {
  state = {
    isConnected: false
  };

  render() {
    // Checking if connected to Internet
    NetInfo.isConnected
      .fetch()
      .then(isConnected => {
        if (isConnected) {
          this.setState({ isConnected: true });
        } else {
          this.setState({
            isConnected: false
          });
        }
      })
      .catch(err => {
        alert(err);
      });

    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Avatar rounded title="RN" size="xlarge" />
        {this.state.isConnected ? (
          <Text style={{ fontSize: 50, textAlign: "center" }}>
            You are Online!
          </Text>
        ) : (
          <Text style={{ fontSize: 50, textAlign: "center" }}>
            You don't have a Internet connection
          </Text>
        )}
      </View>
    );
  }
}

export default Status;
