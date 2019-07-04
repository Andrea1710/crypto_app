import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/store";

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Header from "./src/components/Header";

import Home from "./src/screens/Home";
import Favorites from "./src/screens/Favorites";
import Status from "./src/screens/Status";

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer}>
          {/*Donute Button Image */}
          <Image
            source={require("./src/assets/drawer-150x150.png")}
            style={{
              width: 45,
              marginLeft: 5,
              height: 25
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#3B4249",
        height: 40
      },
      headerTintColor: "#fff"
    })
  }
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Favorites,
    navigationOptions: ({ navigation }) => ({
      title: "Favorites",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#3B4249",
        height: 40
      },
      headerTintColor: "#fff"
    })
  }
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Status,
    navigationOptions: ({ navigation }) => ({
      title: "Status",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#3B4249",
        height: 40
      },
      headerTintColor: "#fff"
    })
  }
});

const DrawerNavigatorExample = createDrawerNavigator({
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: "Home"
    }
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: "Favorites"
    }
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: "Status"
    }
  }
});

const AppContainer = createAppContainer(DrawerNavigatorExample);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
        <Header title="CRYPTOCURRENCY APP" />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  }
});
