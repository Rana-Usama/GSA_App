import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function BeneficiaryUpdate3Screen(props) {

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <Screen style={styles.screen}>
            {/* Back Navigation Icon */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate("BeneficiaryUpdate2Screen")} style={{ position: 'absolute', top: RFPercentage(5), left: RFPercentage(3) }} >
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
                    {image ?
                        <View onPress={pickImage} style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', alignSelf: 'center', marginTop: RFPercentage(6) }} >
                            <TouchableOpacity activeOpacity={0.8} onPress={pickImage} >
                                <Image source={{ uri: image }} style={{ width: RFPercentage(13), height: RFPercentage(13), borderRadius: RFPercentage(1) }} />
                            </TouchableOpacity>
                        </View>
                        :
                        <View activeOpacity={0.8} style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', alignSelf: 'center', marginTop: RFPercentage(6) }} >
                            <TouchableOpacity activeOpacity={0.8} onPress={pickImage} >
                                <Image style={{ width: RFPercentage(13), height: RFPercentage(12.2) }} source={require('../../assets/images/upload.png')} />
                            </TouchableOpacity>
                        </View>
                    }


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
                    onPress={() => props.navigation.navigate("ConfirmationScreen")}
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

export default BeneficiaryUpdate3Screen;