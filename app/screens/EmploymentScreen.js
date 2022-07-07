import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, KeyboardAvoidingView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function EmploymentScreen(props) {

    // Input fields
    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            // placeholder: "الاسم الرباعي",
            title: 'الإسم الرباعي',
            value: "",
        },
        {
            // placeholder: "رقم الجوال",
            title: 'البريد الإلكتروني',
            value: "",
        },
        {
            // placeholder: "المدينة",
            title: 'رقم الهاتف',
            value: "",
        },
        {
            // placeholder: "الحي",
            title: 'المؤهلات',
            placeholderAtStart: true,
            multipleLines: true,
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleSignup = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "" || tempfeilds[3].value === "" || tempfeilds[4].value === "" || tempfeilds[5].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };


    return (
        <Screen style={styles.screen}>
            {/* Back Navigation Icon */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate("ServicesScreen")} style={{ position: 'absolute', top: RFPercentage(5), left: RFPercentage(3) }} >
                <AntDesign name="back" style={{ fontSize: RFPercentage(2.8) }} color={Colors.black} />
            </TouchableOpacity>

            {/* Top Main Grey Heading  */}
            <View style={{ marginTop: RFPercentage(14), width: RFPercentage(20.5), height: RFPercentage(4.5), borderColor: Colors.primary, borderWidth: RFPercentage(0.2), backgroundColor: '#868686', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontFamily: 'Comfortaa_500Medium' }} >
                    للتوظيف
                </Text>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, width: '100%' }}
            >
                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            {inputField.map((item, i) => (
                                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(8) : RFPercentage(2) }} >
                                    <View style={{ right: RFPercentage(1.6), marginBottom: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: '90%' }} >
                                        <Text style={{ marginRight: RFPercentage(0.3), fontSize: RFPercentage(2), marginLeft: RFPercentage(1), color: '#DF0F0F' }} >
                                            *
                                        </Text>
                                        <Text style={{ color: '#868686', fontSize: RFPercentage(2) }} >
                                            {item.title}
                                        </Text>
                                    </View>
                                    <InputField
                                        placeholder={item.placeholder}
                                        placeholderColor={Colors.darkGrey}
                                        height={i == 3 ? RFPercentage(25) : RFPercentage(8)}
                                        backgroundColor={Colors.white}
                                        multipleLines={item.multipleLines}
                                        borderWidth={RFPercentage(0.3)}
                                        borderColor={Colors.primary}
                                        // placeholderAtStart={item.placeholderAtStart}
                                        secure={item.secure}
                                        borderRadius={RFPercentage(1)}
                                        color={Colors.black}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"92%"}
                                    />
                                </View>
                            ))}
                        </View>

                        {/* Button */}
                        <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(5) }}>
                            <MyAppButton
                                title="إرسال"
                                padding={RFPercentage(2.2)}
                                // onPress={() => props.navigation.navigate("LoginScreen2")}
                                backgroundColor={Colors.primary}
                                color={Colors.white}
                                bold={false}
                                fontFamily={'Comfortaa_700Bold'}
                                borderRadius={RFPercentage(20)}
                                width={"80%"}
                            />
                        </View>
                        <View style={{ marginBottom: RFPercentage(8) }} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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

export default EmploymentScreen;