import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function LoginScreen(props) {

    return (
        <Screen style={styles.screen}>

            {/* Back Navigation Icon */}
            {/* <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate("NewsFeedScreen")} style={{ position: 'absolute', top: RFPercentage(5), left: RFPercentage(3) }} >
                <AntDesign name="back" style={{ fontSize: RFPercentage(2.8) }} color={Colors.black} />
            </TouchableOpacity> */}

            {/* Heading */}
            <View style={{ marginTop: RFPercentage(13), width: '85%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(5), fontFamily: 'Comfortaa_400Regular' }} >
                    أعضاء الجمعية
                </Text>
            </View>

            {/* Buttons */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(14) }}>
                <MyAppButton
                    title="تسجيل الدخول"
                    padding={RFPercentage(2.4)}
                    onPress={() => props.navigation.navigate("SignupScreen")}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    fontFamily={'Comfortaa_700Bold'}
                    borderRadius={RFPercentage(1.2)}
                    width={"85%"}
                />
            </View>
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4) }}>
                <MyAppButton
                    title="تسجيل جديد"
                    padding={RFPercentage(2.4)}
                    onPress={() => props.navigation.navigate("LoginScreen2")}
                    backgroundColor={Colors.white}
                    borderColor={Colors.primary}
                    borderWidth={RFPercentage(0.2)}
                    color={Colors.primary}
                    fontFamily={'Comfortaa_700Bold'}
                    bold={false}
                    borderRadius={RFPercentage(1.2)}
                    width={"85%"}
                />
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    }
})

export default LoginScreen;