import React from "react";
// Importing UI Components
import { View, Text, StyleSheet, Image } from "react-native";
// Importing Symbol Icons
import { images } from "../utils/coinIcons";

const CoinCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <Image style={styles.image} source={{ uri: images[props.symbol] }} />
        <Text style={styles.coinSymbol}>{props.symbol}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.coinName}>{props.coin_name}</Text>
        <Text style={styles.coinPrice}>
          {props.price_usd}
          <Text style={styles.moneySymbol}> $ </Text>
        </Text>
      </View>

      <View style={styles.statisticsContainer}>
        <Text>
          24h:
          <Text
            style={
              props.percent_change_24h < 0
                ? styles.percentChangeMinus
                : styles.percentChangePlus
            }
          >
            {" "}
            {props.percent_change_24h} %{" "}
          </Text>
        </Text>
        <Text>
          7d:
          <Text
            style={
              props.percent_change_7d < 0
                ? styles.percentChangeMinus
                : styles.percentChangePlus
            }
          >
            {" "}
            {props.percent_change_7d} %{" "}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 15,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 15
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold"
  },
  coinName: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 20
  },
  separator: {
    marginTop: 5
  },
  coinPrice: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold"
  },
  image: {
    width: 35,
    height: 35
  },
  moneySymbol: {
    fontWeight: "bold"
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    marginLeft: 5
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5
  }
});

export default CoinCard;
