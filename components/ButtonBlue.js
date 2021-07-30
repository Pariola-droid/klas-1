import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from "react-native";



function ButtonBlue({title, onPress}) {
    return (
        <TouchableOpacity
            style={styles.registerContainer}
            onPress={onPress}
        >
            <Text style={styles.registerText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonBlue;

const styles = StyleSheet.create({
    registerContainer: {
        backgroundColor: '#000',
        width: 140,
        height: 40,
        borderRadius: 7,
        //marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    registerText: {
        fontSize: 12,
        fontWeight: '600',
        color: 'white',
    },
});