import React from "react";
import { Text, View, StyleSheet } from "react-native";

const History = (props) => {
    return (
        <View>
            <Text style={styles.history}>{props.title}</Text>
        </View>
    );
};

export default History;

const styles = StyleSheet.create({
    history: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        margin: 2,
        width: 30,
        height: 30,
        backgroundColor: "green",
        textAlign: "center",
        borderRadius: 5,
    },
});
