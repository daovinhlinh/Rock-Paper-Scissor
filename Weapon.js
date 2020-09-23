import React from "react";

import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default function Weapon(props) {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.handleClick(props.name)}
            >
                <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}
                >
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        margin: 10,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
    },
});
