import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';
import BottomTab from './../components/common/BottomTab';

function NewsFeedScreen(props) {

    return (
        <Screen style={styles.screen}>

            {/* Heading */}
            <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(5), fontFamily: 'Comfortaa_400Regular' }} >
                    أحدث الأخبار
                </Text>
            </View>

            {/* Thumbnail */}
            <View style={{ width: '90%' }} >
                <ImageBackground style={{ marginTop: RFPercentage(5), overflow: 'hidden', width: '100%', height: RFPercentage(30), borderRadius: RFPercentage(2), justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center' }} source={require('../../assets/images/nf.png')} >
                    <View style={{ marginBottom: RFPercentage(3.3), width: '100%', height: RFPercentage(7), justifyContent: 'center', alignItems: 'center' }} >
                        <View style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "rgba(255,255,255,0.8)" }} />
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.3), fontFamily: 'Comfortaa_400Regular' }} >
                            جمعية الأمير مشعل تواصل اعمالها في رمضان
                        </Text>
                    </View>
                </ImageBackground>
            </View>

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

export default NewsFeedScreen;