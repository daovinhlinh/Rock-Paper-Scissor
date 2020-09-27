import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Choice = (props) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    props.handleClick(props.name);
                }}
            >
                <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}
                >
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Choice;

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
