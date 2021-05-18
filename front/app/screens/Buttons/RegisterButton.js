import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const RegisterButton = () => {
    return (
        <TouchableOpacity style={styles.viewStyle}>
            <Text style={styles.textStyle}>Rejestracja</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        color: 'black',
        textShadowColor : 'black',
        textShadowRadius: 10,
        fontFamily: 'VarelaRound_400Regular',
    },
    viewStyle: {
        alignItems: 'center',
        width:  380,
        height: 100,
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: "#96F550",
    }
});

export default RegisterButton;