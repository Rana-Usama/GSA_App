import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function BeneficiaryReq3Screen(props) {

    return (
        <Screen style={styles.screen}>
            {/* Back Navigation Icon */}
            <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', top: RFPercentage(5), left: RFPercentage(3) }} >
                <AntDesign name="back" style={{ fontSize: RFPercentage(2.8) }} color={Colors.black} />
            </TouchableOpacity>

            {/* Heading */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={{ marginTop: RFPercentage(13), width: '85%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(5), fontFamily: 'Comfortaa_400Regular' }} >
                            إرفاق الملفات
                        </Text>
                    </View>

                    {/* Sub Headings */}
                    <View style={{ marginTop: RFPercentage(5), width: '85%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_400Regular' }} >
                            يرجى ارفاق صورة لكل من
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(4), width: '85%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                        <Text style={{ color: '#DF0F0F', fontSize: RFPercentage(3), fontFamily: 'Comfortaa_300Light' }} >
                            *
                        </Text>
                        <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_300Light' }} >
                            الهوية الوطنية
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), width: '85%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                        <Text style={{ color: '#DF0F0F', fontSize: RFPercentage(3), fontFamily: 'Comfortaa_300Light' }} >
                            *
                        </Text>
                        <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_300Light' }} >
                            الهوية الوطنية
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), width: '85%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                        <Text style={{ color: '#DF0F0F', fontSize: RFPercentage(3), fontFamily: 'Comfortaa_300Light' }} >
                            *
                        </Text>
                        <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_300Light' }} >
                            طاقة الإعاقة
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), width: '85%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                        <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_300Light' }} >
                            اي تقارير اخرى
                        </Text>
                    </View>

                    {/* Upload Icon */}
                    <TouchableOpacity activeOpacity={0.8} style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', alignSelf: 'center', marginTop: RFPercentage(6) }} >
                        <Image style={{ width: RFPercentage(13), height: RFPercentage(12.2) }} source={require('../../assets/images/upload.png')} />
                    </TouchableOpacity>
                    <View style={{ marginTop: RFPercentage(1), width: '85%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontFamily: 'Comfortaa_400Regular' }} >
                            إرفاق ملف
                        </Text>
                        <Text style={{ color: '#DF0F0F', fontSize: RFPercentage(3), fontFamily: 'Comfortaa_300Light' }} >
                            **
                        </Text>
                    </View>

                    <View style={{ marginBottom: RFPercentage(15) }} />
                </View>
            </ScrollView>
            {/* Button */}
            <View style={{ width: "100%", alignItems: "center", position: 'absolute', bottom: RFPercentage(5) }}>
                <MyAppButton
                    title="إرسال"
                    padding={RFPercentage(2.4)}
                    // onPress={() => props.navigation.navigate("LoginScreen2")}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    fontFamily={'Comfortaa_700Bold'}
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

export default BeneficiaryReq3Screen;