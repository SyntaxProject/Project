import React from 'react';
import { StyleSheet, Text, Image, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts, Pacifico_400Regular, VarelaRound_400Regular } from '@expo-google-fonts/dev';
import AppLoading from "expo-app-loading";


function RegisterScreen({ navigation }) {
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
                
                <View style={styles.background}>   
                    <Text 
                    style={{
                        paddingTop: 20,
                        fontSize: 30,
                        color: 'black',
                        fontFamily: 'VarelaRound_400Regular',
                        textShadowRadius: 15,
                    }}>Zaloguj się</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textLabel}
                        label="E-mail"
                        />
                        <TextInput style={styles.textLabel}
                        label="Hasło"
                        />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Profil')} style={styles.button}>
                        <Text style={styles.buttonText}>Dalej</Text>
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
        top: 30,
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
        height: 100,
        width: 100,
    },
    background: {
        width: '100%',
        height: '60%',
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
        marginTop:30,
        width: "50%",
        height: "15%",
        backgroundColor: "dodgerblue",
        borderRadius:30,
        alignItems: 'center',
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'VarelaRound_400Regular',
    }
})

export default RegisterScreen;