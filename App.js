import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_600SemiBold, Comfortaa_300Light, Comfortaa_700Bold, useFonts } from "@expo-google-fonts/comfortaa";
import { RFPercentage } from 'react-native-responsive-fontsize';

//screens
import NewsFeedScreen from './app/screens/NewsFeedScreen.js';

//config
import Colors from './app/config/Colors';
import ServicesScreen from './app/screens/ServicesScreen';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_300Light,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold
  })

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ServicesScreen">
        <Stack.Screen name="NewsFeedScreen" component={NewsFeedScreen} />
        <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


