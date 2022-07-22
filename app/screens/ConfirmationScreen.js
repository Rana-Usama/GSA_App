import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';

function ConfirmationScreen(props) {
    return (
        <Screen style={styles.screen}>
            {/* Back Navigation Icon */}
            <TouchableOpacity onPress={() => props.navigation.goBack()} activeOpacity={0.7} style={{ position: 'absolute', top: RFPercentage(5), left: RFPercentage(3) }} >
                <AntDesign name="back" style={{ fontSize: RFPercentage(2.8) }} color={Colors.black} />
            </TouchableOpacity>

            {/* Image */}
            <Image style={{ marginTop: RFPercentage(-16), width: RFPercentage(18), height: RFPercentage(18) }} source={require('../../assets/images/tick.png')} />
            <Text style={{ marginTop: RFPercentage(2), color: Colors.primary, fontSize: RFPercentage(3.5), fontFamily: 'Comfortaa_500Medium' }} >
                لقد تم إستلام طلبك بنجاح
            </Text>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Colors.white
    }
})


export default ConfirmationScreen;