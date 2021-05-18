import React from 'react';
import { StyleSheet, Text, Image, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts, Pacifico_400Regular, VarelaRound_400Regular } from '@expo-google-fonts/dev';
import AppLoading from "expo-app-loading";


function WelcomeScreen({ navigation }) {
    let [fontsLoaded, error] = useFonts({
        Pacifico_400Regular,
        VarelaRound_400Regular,
    })

    if (!fontsLoaded){
        return <AppLoading />;
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient colors={['dodgerblue', 'white']} style={styles.container}>
                <StatusBar translucent backgroundColor="transparent"/>

                <View style={styles.logoContainer}>
                <Image source={require('../assets/logoApk.png')} style={styles.logoIco}/>
                <Text style={styles.logoText}>Pożycz i zapomnij</Text>
                </View>

                
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
                    <Text style={styles.buttonText}>Logowanie</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerButton}>
                    <Text style={styles.buttonText}>Rejestracja</Text>
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
    logoContainer:{
        position: "absolute",
        top: 50,
        alignItems: 'center',
    },
    logoText: {
        fontSize: 30,
        color: 'white',
        textShadowColor : 'black',
        textShadowRadius: 5,
        fontFamily: 'Pacifico_400Regular',
    },
    logoIco: {
        height: 200,
        width: 200,
    },
    registerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,
        backgroundColor: "#96F550",
    },
    loginButton:{
        alignItems: 'center',
        width:  380,
        height: 100,
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: "dodgerblue",   
    },
    buttonText: {
        fontSize: 40,
        color: 'black',
        textShadowColor : 'black',
        textShadowRadius: 10,
        fontFamily: 'VarelaRound_400Regular',
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,
        backgroundColor: "dodgerblue",
    }
})


export default WelcomeScreen;
