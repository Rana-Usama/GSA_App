import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(8.8), backgroundColor: Colors.primary }}>
            <View style={{ width: "80%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("NewsFeedScreen")} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.2), height: RFPercentage(3.3) }} source={require('../../../assets/images/b1.png')} />
                    <Text style={{ color: Colors.white, fontFamily: 'Comfortaa_400Regular', fontSize: RFPercentage(1.9), marginTop: RFPercentage(0.8) }} >
                        الرئيسية
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("ServicesScreen")} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.2), height: RFPercentage(3.3) }} source={require('../../../assets/images/b2.png')} />
                    <Text style={{ color: Colors.white, fontFamily: 'Comfortaa_400Regular', fontSize: RFPercentage(1.9), marginTop: RFPercentage(0.8) }} >
                        الخدمات
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("LoginScreen")} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.2), height: RFPercentage(3.4) }} source={require('../../../assets/images/b3.png')} />
                    <Text style={{ color: Colors.white, fontFamily: 'Comfortaa_400Regular', fontSize: RFPercentage(1.9), marginTop: RFPercentage(0.8) }} >
                        الأعضاء
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default BottomTab;