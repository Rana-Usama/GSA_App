import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function MembershipRenwalScreen(props) {

    return (
        <Screen style={styles.screen}>
            {/* Back Navigation Icon */}
            <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', top: RFPercentage(5), left: RFPercentage(3) }} >
                <AntDesign name="back" style={{ fontSize: RFPercentage(2.8) }} color={Colors.black} />
            </TouchableOpacity>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                {/* Heading */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={{ marginTop: RFPercentage(13), width: '85%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(5), fontFamily: 'Comfortaa_400Regular' }} >
                            تجديد العضوية
                        </Text>
                    </View>

                    {/* Text */}
                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center' }} >

                        <Text>
                            2
                        </Text>
                        <Text style={{ color: '#DF0F0F' }} >
                            **
                        </Text>

                    </View>

                    <View style={{ marginBottom: RFPercentage(15) }} />
                </View>
            </ScrollView>

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

export default MembershipRenwalScreen;