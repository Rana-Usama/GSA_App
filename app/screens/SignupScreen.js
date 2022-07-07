import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingModal';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function SignupScreen(props) {


    // Input fields
    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "الاسم الرباعي",
            value: "",
        },
        {
            placeholder: "رقم الجوال",
            value: "",
        },
        {
            placeholder: "المدينة",
            value: "",
        },
        {
            placeholder: "الحي",
            value: "",
        },
        {
            placeholder: "البريد الإلكتروني",
            value: "",
        },
        {
            placeholder: "عنوان العمل",
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
        props.navigation.navigate("NewsFeedScreen")

        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={styles.screen}>
            <LoadingModal show={indicator} />

            {/* Back Navigation Icon */}
            <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', top: RFPercentage(5), left: RFPercentage(3) }} >
                <AntDesign name="back" style={{ fontSize: RFPercentage(2.8) }} color={Colors.black} />
            </TouchableOpacity>

            {/* Heading */}
            <View style={{ marginTop: RFPercentage(13), width: '85%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(5), fontFamily: 'Comfortaa_400Regular' }} >
                    تسجيل جديد
                </Text>
            </View>

            {/* Input field */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? RFPercentage(8) : RFPercentage(2) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={Colors.darkGrey}
                                    height={RFPercentage(8)}
                                    backgroundColor={Colors.white}
                                    borderWidth={RFPercentage(0.3)}
                                    borderColor={Colors.black}
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
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(8) }}>
                        <MyAppButton
                            title="التالي"
                            padding={RFPercentage(2.4)}
                            onPress={() => props.navigation.navigate("LoginScreen2")}
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

export default SignupScreen;