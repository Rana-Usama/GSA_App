import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from '../components/Screen';
import BottomTab from './../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function ServicesScreen(props) {

    const servicesData = [
        {
            serviceImageSource1: require('../../assets/images/s1.png'),
            title1: 'الشكاوي',
            serviceImageSource2: require('../../assets/images/s2.png'),
            title2: 'الإقتراحات'
        },
        {
            serviceImageSource1: require('../../assets/images/s3.png'),
            title1: 'العمل التطوعي',
            serviceImageSource2: require('../../assets/images/s4.png'),
            title2: 'الإستفسارات'
        },
        {
            serviceImageSource1: require('../../assets/images/s5.png'),
            title1: 'تسجيل مستفيد',
            serviceImageSource2: require('../../assets/images/s6.png'),
            title2: `تحديث بيانات مستفيد`
        }
    ]

    return (
        <Screen style={styles.screen}>

            {/* Back Navigation Icon */}
            <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', top: RFPercentage(5), left: RFPercentage(3) }} >
                <AntDesign name="back" style={{ fontSize: RFPercentage(2.8) }} color={Colors.black} />
            </TouchableOpacity>

            {/* Heading */}
            <View style={{ marginTop: RFPercentage(8), width: '90%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(5), fontFamily: 'Comfortaa_400Regular' }} >
                    الخدمات
                </Text>
            </View>

            {/* Services */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {servicesData.map((item, i) => (
                        <View key={i} style={{ marginTop: RFPercentage(5), width: '79%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                            {/* Left Service */}
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                <TouchableOpacity activeOpacity={0.8} >
                                    <Image style={{ width: RFPercentage(17), height: RFPercentage(11.2) }} source={item.serviceImageSource1} />
                                </TouchableOpacity>
                                <Text style={{ marginTop: RFPercentage(2), color: '#2D6A4F', fontSize: RFPercentage(2.1), fontFamily: 'Comfortaa_700Bold' }} >
                                    {item.title1}
                                </Text>
                            </View>
                            {/* Right Service */}
                            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0 }} >
                                <TouchableOpacity activeOpacity={0.8} >
                                    <Image style={{ width: RFPercentage(17), height: RFPercentage(11.2) }} source={item.serviceImageSource2} />
                                </TouchableOpacity>
                                <Text style={{ marginTop: RFPercentage(2), color: '#2D6A4F', fontSize: RFPercentage(2.1), fontFamily: 'Comfortaa_700Bold' }} >
                                    {item.title2}
                                </Text>
                            </View>
                        </View>

                    ))}

                    {/* Last Service */}
                    <View style={{ marginTop: RFPercentage(5), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <TouchableOpacity activeOpacity={0.8} >
                                <Image style={{ width: RFPercentage(17), height: RFPercentage(11.2) }} source={require('../../assets/images/s7.png')} />
                            </TouchableOpacity>
                            <Text style={{ marginTop: RFPercentage(2), color: '#2D6A4F', fontSize: RFPercentage(2.2), fontFamily: 'Comfortaa_700Bold' }} >
                                الوظائف
                            </Text>
                        </View>
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

export default ServicesScreen;