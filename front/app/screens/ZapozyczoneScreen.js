import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts, Pacifico_400Regular, VarelaRound_400Regular } from '@expo-google-fonts/dev';
import AppLoading from "expo-app-loading";
import SearchBars from '../../components/SearchBars';


function ZapozyczoneScreen({ navigation }) {
    let [fontsLoaded, error] = useFonts({
        Pacifico_400Regular,
        VarelaRound_400Regular,
    })

    if (!fontsLoaded){
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <SearchBars />
            <LinearGradient colors={['white', '#B2AEAE']} style={styles.container}>
                <StatusBar translucent backgroundColor="transparent"/>
                <Text style={styles.middleText}>Lista zapożyczonych przedmiotów:</Text>
                <View style={styles.textContainer} />
                <Text style={{ 
                    color: 'black', 
                    fontFamily: 'VarelaRound_400Regular', 
                    fontSize: 25,
                    bottom: 10,
                    alignItems: 'center',}
                }>Oddaj:</Text>

                <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.button}>
                    <Text style={styles.buttonText}>Pieniądze</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.button2}>
                    <Text style={styles.buttonText}>Przedmiot</Text>
                </TouchableOpacity>

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
    middleText: {
        position: "absolute",
        top: 20,
        fontSize: 21,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor : 'black',
        alignItems: 'center',
    },
    textContainer: {
        position: "absolute",
        top: 70,
        width: "90%",
        height: "60%",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        bottom: -14,
        right: 85,
        width: "45%",
        height: "8%",
        backgroundColor: "#00C689",
        borderRadius:30,
        alignItems: 'center',
        justifyContent: "center",
    },
    button2: {
        bottom: 30,
        left: 85,
        width: "45%",
        height: "8%",
        backgroundColor: "#00C689",
        borderRadius:30,
        alignItems: 'center',
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'VarelaRound_400Regular',
    }
})

export default ZapozyczoneScreen;