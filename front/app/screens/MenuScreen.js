import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts, Pacifico_400Regular, VarelaRound_400Regular } from '@expo-google-fonts/dev';
import AppLoading from "expo-app-loading";


function MenuScreen({ navigation }) {
    let [fontsLoaded, error] = useFonts({
        Pacifico_400Regular,
        VarelaRound_400Regular,
    })

    if (!fontsLoaded){
        return <AppLoading />;
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient colors={['#2B4475', '#2B4475', 'white']} style={styles.container}>
                <StatusBar translucent backgroundColor="transparent"/>
                <View style={styles.logoContainer}>

                <View style={styles.logoName}>
                    <Text style={styles.logoText}>AK</Text>
                </View>
                    <Text style={styles.nameText}>Adam Kowalski</Text>
                    <Text style={styles.mailText}>adam.kowalski@gmail.com</Text>
                </View>
                <View style={styles.background}>

                    <TouchableOpacity onPress={() => navigation.navigate('Profil')} style={styles.button}>
                        <Image source={require('../assets/home.png')} style={styles.menuIcon}/>
                        <Text style={styles.buttonText}>      Profil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.button}>
                        <Image source={require('../assets/contact.png')} style={styles.menuIcon}/>
                        <Text style={styles.buttonText}>      Kontakty</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.button}>
                        <Image source={require('../assets/finanse.png')} style={styles.menuIcon}/>
                        <Text style={styles.buttonText}>      Finanse</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Zapożyczone')} style={styles.button}>
                        <Image source={require('../assets/shop.png')} style={styles.menuIcon}/>
                        <Text style={styles.buttonText}>      Zapożyczone przedmioty</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Użyczone')} style={styles.button}>
                        <Image source={require('../assets/shop.png')} style={styles.menuIcon}/>
                        <Text style={styles.buttonText}>      Użyczone przedmioty</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.button}>
                        <Image source={require('../assets/alarm.png')} style={styles.menuIcon}/>
                        <Text style={styles.buttonText}>      Powiadomienia</Text>
                    </TouchableOpacity>
                </View>

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
    logoContainer:{
        position: "absolute",
        // top: -70,
        top: "-12%",
        alignItems: 'center',
    },
    logoText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor : 'black',
    },
    logoIco: {
        height: 100,
        width: 100,
    },
    background: {
        width: '100%',
        height: '77%',
        backgroundColor: "white",
        borderRadius:30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: "absolute",
    },
    textInputContainer: {
        paddingTop: 35,
        width: "70%",
    },
    textLabel: {
        height: 60,
        marginBottom: 15,
    },
    button: {
        marginTop: 15,
        marginStart: 10,
        width: "75%",
        height: "10%",
        backgroundColor: "white",
        borderRadius: 30,
        alignItems: 'baseline',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'VarelaRound_400Regular',
        fontWeight: 'bold',
        justifyContent: 'space-between',
    },
    logoName: {
        top: 110,
        right: 120,
        width: "30%",
        height: "65%",
        backgroundColor: "#418BFB",
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: "center",
    },
    nameText: {
        top: 50,
        left: 30,
        fontSize: 27,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor : 'black',
    },
    mailText: {
        top: 55,
        left: 30,
        fontSize: 18,
        color: 'white',
        fontWeight: 'normal',
        textShadowColor : 'black',
    },
    menuIcon: {
        width: 35,
        height: 35,
    }
})

export default MenuScreen;