import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from './src/components/MovieList';
import MovieDetails from './src/components/movieDetails';
import MainScreen from './src/components/apiList';
import NavBar from './src/components/NavBar';
import ProfileMenu from './src/components/profileMenu';
import Favourite from './src/components/favourite';
import HelpCenter from './src/components/HelpCenter';
import LoginScreen from './src/components/LoginScreen';
import SignUp from './src/components/SignUp';
import ForgotPassword from './src/components/ForgotPassword';
import {PracticeContext, PracticeProvider} from './src/components/Context';

const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    <PracticeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: 'Movies Suggestions', //Set Header Title
              headerStyle: {
                backgroundColor: '#438fb0', //Set Header color
              },
              headerTintColor: '#ffffff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <NavBar />,
            }}></Stack.Screen>
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: 'SignUp', //Set Header Title
              headerStyle: {
                backgroundColor: '#438fb0', //Set Header color
              },
              headerTintColor: '#ffffff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <NavBar />,
            }}></Stack.Screen>
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              title: 'Update Password', //Set Header Title
              headerStyle: {
                backgroundColor: '#438fb0', //Set Header color
              },
              headerTintColor: '#ffffff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <NavBar />,
            }}></Stack.Screen>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              title: 'Movie List', //Set Header Title
              headerStyle: {
                backgroundColor: '#438fb0', //Set Header color
              },
              headerTintColor: '#ffffff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <NavBar />,
            }}></Stack.Screen>
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{
              title: 'Movie Details', //Set Header Title
              headerStyle: {
                backgroundColor: '#438fb0', //Set Header color
              },
              headerTintColor: '#ffffff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <NavBar />,
            }}></Stack.Screen>
          <Stack.Screen
            name="ProfileMenu"
            component={ProfileMenu}
            // options={{
            //   title: 'profile Menu', //Set Header Title
            //   headerStyle: {
            //     backgroundColor: '#000000', //Set Header color
            //   },
            //   headerTintColor: '#ffffff', //Set Header text color
            //   headerTitleStyle: {
            //   fontWeight: 'bold', //Set Header text style
            //   },
            //   headerRight: () => <NavBar/>,
            // }}
          ></Stack.Screen>
          <Stack.Screen
            name="Favourite"
            component={Favourite}
            options={{
              title: 'Favourite', //Set Header Title
              headerStyle: {
                backgroundColor: '#438fb0', //Set Header color
              },
              headerTintColor: '#ffffff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <NavBar />,
            }}></Stack.Screen>
          <Stack.Screen
            name="HelpCenter"
            component={HelpCenter}
            options={{
              title: 'HelpCenter', //Set Header Title
              headerStyle: {
                backgroundColor: '#438fb0', //Set Header color
              },
              headerTintColor: '#ffffff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <NavBar />,
            }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PracticeProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
