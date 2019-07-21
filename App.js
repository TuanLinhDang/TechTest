import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Screens/HomeScreen'
import DetailScreen from './Screens/DetailScreen'

const StackNav = createStackNavigator({
  HomeScreen,
  DetailScreen
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const AppContainer = createAppContainer(StackNav)

class App extends React.Component {
  render(){
    return (
      <PaperProvider>
        <AppContainer/>
      </PaperProvider>
    );
  }
}

export default App

