import React, { Component } from "react";
// Importing connection and action from Redux
import { connect } from "react-redux";
import FetchCoinData from "../store/actions/fetchCoinData";
// Importing UI Components
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  ScrollView
} from "react-native";
import { SearchBar, Text } from "react-native-elements";
// Importing Local Storage
import AsyncStorage from "@react-native-community/async-storage";
// Importing Custom Component
import CryptoCard from "./CryptoCard";

class CryptoContainer extends Component {
  state = {
    data: [],
    favorites: []
  };

  componentDidMount() {
    this.props.FetchCoinData();
  }

  // Saving Local Storage Data function
  saveData = favorite => {
    AsyncStorage.setItem("coin", JSON.stringify(favorite));
    this.setState({ addedToFav: true });
    alert(`Saved ${favorite.symbol} to Favorites Tab!`);
  };

  // Function to render Data to Screen
  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map(coin => {
      const listOfCoins = (
        <TouchableOpacity key={coin.symbol} onPress={() => this.saveData(coin)}>
          <CryptoCard
            symbol={coin.symbol}
            coin_name={coin.symbol}
            price_usd={coin.lastPrice}
            percent_change_24h={coin.priceChangePercent}
            percent_change_7d={coin.priceChange}
          />
        </TouchableOpacity>
      );
      return listOfCoins;
    });
  }

  render() {
    const { crypto } = this.props;
    const { contentContainer } = styles;

    // Showing Spinner while loading Data
    if (crypto.isFetching) {
      return (
        <View>
          <ActivityIndicator style={styles.indicator} size="large" />
        </View>
      );
    }

    return (
      <View>
        <SearchBar placeholder="Search..." round autoCorrect={false} />
        <View style={styles.titleContainer}>
          <Text h3 h3Style={{ textAlign: "center", marginTop: 5 }}>
            Crypto Trading Pairs
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1
          }}
        />
        <ScrollView contentContainerStyle={contentContainer}>
          {this.renderCoinCards()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 25
  },
  indicator: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  titleContainer: {
    alignItems: "center",
    display: "flex",
    padding: 5,
    backgroundColor: "#3B4249"
  }
};

const mapStateToProps = ({ crypto }) => {
  return {
    crypto: crypto
  };
};

export default connect(
  mapStateToProps,
  { FetchCoinData }
)(CryptoContainer);
