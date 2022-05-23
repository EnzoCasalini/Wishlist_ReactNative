import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export type ButtonProps = {
    title: string;
    onPress: () => void;
};


export const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        marginTop: 15,
        paddingVertical: 15,
        borderRadius: 10,
        width: 100,
        alignItems: "center",
    },
    text: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
    },
});