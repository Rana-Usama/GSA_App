import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function MembershipRenwalScreen(props) {

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
            <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate("ProfileScreen")} style={{ position: 'absolute', top: RFPercentage(5), left: RFPercentage(3) }} >
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
                    <View style={{ marginTop: RFPercentage(4), width: '80%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_400Regular' }}  >
                            أعضائنا الكرام لتجديد العضوية يرجى تحويل رسوم العضوية
                            (300 ريال للعضو العامل 150 ريال للعضو المنتسب)
                            على أحد حساباتنا البنكية و من ثم ارفاق صورة من الإيصال ادناه.
                        </Text>
                        <Text style={{ fontSize: RFPercentage(2), marginLeft: RFPercentage(1), color: '#DF0F0F' }} >
                            **
                        </Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(2), width: '80%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_600SemiBold' }} >
                            بنك الراجحي
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(2), width: '80%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_600SemiBold' }} >

                            SA3280000205608010627779
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(0.8), width: '80%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_600SemiBold' }} >
                            205608010627779
                        </Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(2), width: '80%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_600SemiBold' }} >
                            البنك الأهلي
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(2), width: '80%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_600SemiBold' }} >

                            SA3280000205608010627779
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(0.8), width: '80%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontFamily: 'Comfortaa_600SemiBold' }} >
                            205608010627779
                        </Text>
                    </View>

                    {image ?
                        <TouchableOpacity activeOpacity={0.6} onPress={pickImage} style={{ alignSelf: 'center', marginTop: RFPercentage(3) }} >
                            <Image source={{ uri: image }} style={{ width: RFPercentage(20), height: RFPercentage(20), borderRadius: RFPercentage(1) }} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.8} onPress={pickImage}>
                            <Image style={{ marginTop: RFPercentage(3), width: RFPercentage(20), height: RFPercentage(19) }} source={require('../../assets/images/upload.png')} />
                        </TouchableOpacity>
                    }

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(1) }} >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ fontSize: RFPercentage(2), marginLeft: RFPercentage(1), color: Colors.black, fontFamily: 'Comfortaa_600SemiBold' }} >
                                إرفاق صورة
                            </Text>
                            <Text style={{ fontSize: RFPercentage(2), marginLeft: RFPercentage(1), color: '#DF0F0F' }} >
                                **
                            </Text>
                        </View>
                    </View>






                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(8) }}>
                        <MyAppButton
                            title="إرسال"
                            padding={RFPercentage(2)}
                            onPress={() => props.navigation.navigate("ConfirmationScreen")}
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

export default MembershipRenwalScreen;