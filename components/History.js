import React from "react";
import { Text, View, StyleSheet } from "react-native";

import styles from "../styles/History.style";

const History = (props) => {
    return (
        <View>
            <Text
                style={[
                    styles.container,
                    { backgroundColor: props.background },
                ]}
            >
                {props.title}
            </Text>
        </View>
    );
};

export default History;
