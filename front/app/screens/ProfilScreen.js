import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts, Pacifico_400Regular, VarelaRound_400Regular } from '@expo-google-fonts/dev';
import AppLoading from "expo-app-loading";


function ProfilScreen({ navigation }) {
    let [fontsLoaded, error] = useFonts({
        Pacifico_400Regular,
        VarelaRound_400Regular,
    })

    if (!fontsLoaded){
        return <AppLoading />;
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient colors={['white', '#B2AEAE']} style={styles.container}>
                <StatusBar translucent backgroundColor="transparent"/>

                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('Menu')}>
                    <Image source={require('../assets/menu.png')} style={styles.Burger}/>
                </TouchableOpacity>

                <View style={styles.logoName}>
                    <Text style={styles.logoText}>AK</Text>
                </View>

                <Text style={styles.nameText}>Adam Kowalski</Text>
                <Text style={styles.mailText}>adam.kowalski@gmail.com {"\n"}+ 48 892 293 021</Text>
                <Text style={styles.middleText}>Lista zbliżających się terminów:</Text>

                <View style={styles.textContainer} />
                <Text style={styles.dateText}>
                    20.05.2021r.
                </Text>
                <Text style={styles.infoText}>
                        Do: Emilia Krym {"\n"}(zwrot samochodu)
                </Text>
                
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    menuIcon: {
        top: -570,
        right: '40%',
        height: 20,
        width: 20,
        alignItems: 'center',
    },
    logoName: {
        position: "absolute",
        top: 80,
        left: 25,
        width: "20%",
        height: "12%",
        backgroundColor: "#418BFB",
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: "center",
    },
    logoText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor : 'black',
    },
    nameText: {
        position: "absolute",
        top: 70,
        right: 50,
        fontSize: 27,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor : 'black',
    },
    mailText: {
        position: "absolute",
        top: 110,
        right: 20,
        fontSize: 18,
        color: 'black',
        fontWeight: 'normal',
        textShadowColor : 'black',
    },
    middleText: {
        position: "absolute",
        top: 200,
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor : 'black',
        alignItems: 'center',
    },
    textContainer: {
        position: "absolute",
        bottom: 25,
        width: "85%",
        height: "55%",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        position: "absolute",
        bottom: 310,
        left: 50,
        fontSize: 25,
        color: '#FF5F5F',
        fontWeight: 'bold',
    },
    infoText: {
        position: "absolute",
        bottom: 260,
        left: 50,
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold',
    },
    Burger: {
        position: "absolute",
        height: 25,
        width: 25,
    }
})

export default ProfilScreen;