import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from "react-native";



function ButtonBlack({title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}
            style={styles.registerContainer}
        >
            <Text style={styles.registerText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonBlack;

const styles = StyleSheet.create({
    registerContainer: {
        backgroundColor: '#111',
        width: 120,
        height: 40,
        borderRadius: 5,
        //marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    registerText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
});