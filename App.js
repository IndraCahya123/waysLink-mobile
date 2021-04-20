import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, Image } from 'react-native';

import HomeScreen from './src/HomeScreen';
import Login from './src/Login';
import Register from './src/Register';

import HomeIcon from './src/icon/homepage.png';
import LoginIcon from './src/icon/enter.png';
import RegIcon from './src/icon/edit.png';

const DrawerNav = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav.Navigator drawerStyle={{ width: 250 }} drawerContentOptions={{activeBackgroundColor: "rgba(255, 159, 0, 0.5)"}}>
        <DrawerNav.Screen name="Home" component={HomeScreen} options={{
          drawerLabel: ({focused}) => {
            return (<Text style={focused ? styles.activeState : styles.inactiveState}>Home Page</Text>)
          },
          drawerIcon: ({size}) => {
            return (
              <Image
                source={HomeIcon}
                style={{ height: size, width: size }}
              />
            );
          }
        }} />
        <DrawerNav.Screen name="Login" component={Login} options={{
          drawerLabel: ({focused}) => {
            return (<Text style={focused ? styles.activeState : styles.inactiveState}>Login</Text>)
          },
          drawerIcon: ({size}) => {
            return (
              <Image
                source={LoginIcon}
                style={{ height: size, width: size }}
              />
            );
          }
        }}/>
        <DrawerNav.Screen name="Register" component={Register} options={{
          drawerLabel: ({focused}) => {
            return (<Text style={focused ? styles.activeState : styles.inactiveState}>Register</Text>)
          },
          drawerIcon: ({size}) => {
            return (
              <Image
                source={RegIcon}
                style={{ height: size, width: size }}
              />
            );
          }
        }}/>
      </DrawerNav.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  activeState: {
    color: "grey"
  },
  inactiveState: {
    color: "#000"
  }
})