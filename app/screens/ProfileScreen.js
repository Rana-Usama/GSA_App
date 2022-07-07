import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from '../components/Screen';
import BottomTab from './../components/common/BottomTab';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function ProfileScreen(props) {

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={{ width: '100%', height: RFPercentage(26), backgroundColor: '#D8F3DC80' }} >
                {/* Back Navigation Icon */}
                <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', top: RFPercentage(5), left: RFPercentage(3) }} >
                    <AntDesign name="back" style={{ fontSize: RFPercentage(2.4) }} color={Colors.black} />
                </TouchableOpacity>
            </View>

            {/* Profile Avatar */}
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: RFPercentage(-14) }} >
                <Image style={{ width: RFPercentage(23), height: RFPercentage(23) }} source={require('../../assets/images/avatar.png')} />
            </TouchableOpacity>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* ID */}
                    <View style={{ marginTop: RFPercentage(4), width: RFPercentage(24), height: RFPercentage(4.8), backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.white, fontFamily: 'Comfortaa_400Regular', fontSize: RFPercentage(2.1) }} >
                            76555965454
                        </Text>
                    </View>

                    {/* Buttons */}
                    <TouchableOpacity onPress={() => props.navigation.navigate("MembershipRenwalScreen")} activeOpacity={0.8} style={{ marginTop: RFPercentage(7), width: '73%', height: RFPercentage(9), justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        <View style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "rgba(153,197,160,0.2)" }} />
                        <Text style={{ color: Colors.black, fontFamily: 'Comfortaa_500Medium', fontSize: RFPercentage(2.4) }} >
                            تجديد العضوية
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("BeneficiaryReq3Screen")} style={{ marginTop: RFPercentage(2.5), width: '73%', height: RFPercentage(9), backgroundColor: '#D8F3DC', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.black, fontFamily: 'Comfortaa_500Medium', fontSize: RFPercentage(2.4) }} >
                            تجديد العضوية
                        </Text>
                    </TouchableOpacity>

                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(5) }}>
                        <MyAppButton
                            title="تسجيل الخروج"
                            padding={RFPercentage(2.4)}
                            // onPress={() => handleLogin()}
                            backgroundColor={Colors.primary}
                            color={Colors.white}
                            bold={false}
                            fontFamily={'Comfortaa_700Bold'}
                            borderRadius={RFPercentage(1.2)}
                            width={"85%"}
                        />
                    </View>

                    <View style={{ marginBottom: RFPercentage(15) }} />
                </View>
            </ScrollView>

            {/* Bottom Tab */}
            <BottomTab props={props} />
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

export default ProfileScreen;