import React, {Component} from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';
import ProfilScreen from './app/screens/ProfilScreen';
import ZapozyczoneScreen from './app/screens/ZapozyczoneScreen';
import UzyczoneScreen from './app/screens/UzyczoneScreen';
import MenuScreen from './app/screens/MenuScreen';
import { createStackNavigator } from "react-navigation-stack";
import 'react-native-gesture-handler';
import { createAppContainer } from "react-navigation";


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: WelcomeScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  Profil: {
    screen: ProfilScreen
  },
  Zapożyczone: {
    screen: ZapozyczoneScreen
  },
  Użyczone: {
    screen: UzyczoneScreen
  },
  Menu: {
    screen: MenuScreen
  },

},{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);
