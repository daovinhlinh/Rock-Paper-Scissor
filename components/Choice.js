import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "../styles/Choice.style";
const Choice = (props) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    props.handleClick(props.name);
                }}
            >
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Choice;
