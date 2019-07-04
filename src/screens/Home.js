import React, { Component } from "react";
// Importing UI Components
import { View } from "react-native";
// Importing Connection Info
import NetInfo from "@react-native-community/netinfo";
// Importing Custom Components
import CryptoContainer from "../components/CryptoContainer";
import OfflineNotice from "../components/OfflineNotice";

class Home extends Component {
  state = {
    isConnected: true
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
      <View>
        {!this.state.isConnected ? (
          <View style={{ height: 30 }}>
            <OfflineNotice />
          </View>
        ) : null}

        <CryptoContainer />
      </View>
    );
  }
}

export default Home;
