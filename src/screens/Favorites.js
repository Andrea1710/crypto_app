import React, { Component } from "react";
// Importing UI Components
import { View, Button, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-elements";
// Importing Local Storage
import AsyncStorage from "@react-native-community/async-storage";
// Importing Custom Components
import CryptoCard from "../components/CryptoCard";

class Favorites extends Component {
  state = {
    favorites: []
  };

  componentDidMount() {
    this.displayData();
  }

  // Display Local Storage Data function
  displayData = async () => {
    try {
      let favorite = await AsyncStorage.getItem("coin");
      let parsed = JSON.parse(favorite);

      this.setState(prevState => {
        return {
          favorites: prevState.favorites.concat(parsed)
        };
      });
    } catch (err) {
      alert(err);
    }
  };

  // Remove Local Storage Data function
  removeFavorite = symbol => {
    const newFavorites = this.state.favorites.filter(fav => {
      return fav.symbol !== symbol;
    });

    this.setState({
      favorites: newFavorites
    });
  };

  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <Button
          onPress={this.displayData}
          title="Click to update the last Favorite Saved!"
        />
        <Text h5 style={{ color: "red", textAlign: "center" }}>
          Click on one of them to delete Pairs from your favorites!
        </Text>
        <View style={styles.titleContainer}>
          <Text h3 h3Style={{ textAlign: "center", marginTop: 5 }}>
            Favorite Pairs
          </Text>
        </View>
        {this.state.favorites.map((favorite, i) => {
          return (
            <ScrollView key={i}>
              <TouchableOpacity
                onPress={() => this.removeFavorite(favorite.symbol)}
              >
                <CryptoCard
                  symbol={favorite.symbol}
                  coin_name={favorite.symbol}
                  price_usd={favorite.openPrice}
                  percent_change_24h={favorite.priceChangePercent}
                  percent_change_7d={favorite.priceChange}
                />
              </TouchableOpacity>
            </ScrollView>
          );
        })}
      </View>
    );
  }
}

const styles = {
  titleContainer: {
    alignItems: "center",
    display: "flex",
    padding: 5,
    backgroundColor: "#3B4249"
  }
};

export default Favorites;
