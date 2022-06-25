import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';
import BottomTab from './../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function ServicesScreen(props) {

    return (
        <Screen style={styles.screen}>
            <Text>
                Akhidmat
            </Text>
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