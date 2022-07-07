import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_600SemiBold, Comfortaa_300Light, Comfortaa_700Bold, useFonts } from "@expo-google-fonts/comfortaa";
import { RFPercentage } from 'react-native-responsive-fontsize';

//screens
import NewsFeedScreen from './app/screens/NewsFeedScreen.js';
import ServicesScreen from './app/screens/ServicesScreen';
import LoginScreen from './app/screens/LoginScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import LoginScreen2 from './app/screens/LoginScreen2';
import SignupScreen from './app/screens/SignupScreen';
import PasswordRecoveryScreen from './app/screens/PasswordRecoveryScreen';
import PasswordRecovery2Screen from './app/components/PasswordRecovery2Screen';
import BeneficiaryReq1Screen from './app/screens/BeneficiaryReq1Screen';
import BeneficiaryReq2Screen from './app/screens/BeneficiaryReq2Screen';
import BeneficiaryReq3Screen from './app/screens/BeneficiaryReq3Screen';
import BeneficiaryUpdate1Screen from './app/screens/BeneficiaryUpdate1Screen';
import BeneficiaryUpdate2Screen from './app/screens/BeneficiaryUpdate2Screen';
import BeneficiaryUpdate3Screen from './app/screens/BeneficiaryUpdate3Screen';
import ConfirmationScreen from './app/screens/ConfirmationScreen';
import MembershipRenwalScreen from './app/screens/MembershipRenwalScreen';

//config
import Colors from './app/config/Colors';
import EmploymentScreen from './app/screens/EmploymentScreen';
import VolunteeringScreen from './app/screens/VolunteeringScreen';
import ComplaintScreen from './app/screens/ComplaintScreen';
import RecommendationScreen from './app/screens/RecommendationScreen';

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
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="NewsFeedScreen">
        <Stack.Screen name="NewsFeedScreen" component={NewsFeedScreen} />
        <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="LoginScreen2" component={LoginScreen2} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="PasswordRecoveryScreen" component={PasswordRecoveryScreen} />
        <Stack.Screen name="PasswordRecovery2Screen" component={PasswordRecovery2Screen} />
        <Stack.Screen name="BeneficiaryReq1Screen" component={BeneficiaryReq1Screen} />
        <Stack.Screen name="BeneficiaryReq2Screen" component={BeneficiaryReq2Screen} />
        <Stack.Screen name="BeneficiaryReq3Screen" component={BeneficiaryReq3Screen} />
        <Stack.Screen name="BeneficiaryUpdate1Screen" component={BeneficiaryUpdate1Screen} />
        <Stack.Screen name="BeneficiaryUpdate2Screen" component={BeneficiaryUpdate2Screen} />
        <Stack.Screen name="BeneficiaryUpdate3Screen" component={BeneficiaryUpdate3Screen} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
        <Stack.Screen name="MembershipRenwalScreen" component={MembershipRenwalScreen} />
        <Stack.Screen name="EmploymentScreen" component={EmploymentScreen} />
        <Stack.Screen name="VolunteeringScreen" component={VolunteeringScreen} />
        <Stack.Screen name="ComplaintScreen" component={ComplaintScreen} />
        <Stack.Screen name="RecommendationScreen" component={RecommendationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


