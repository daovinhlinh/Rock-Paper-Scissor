import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

import styles from "../styles/UserCard.style";

const UserCard = ({ player, choice }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.playerName}>{player}</Text>
            <Image
                source={{
                    uri:
                        choice.img ||
                        "https://www.kindpng.com/picc/m/420-4206527_waiting-for-delivery-waiting-for-delivery-icon-hd.png",
                }}
                resizeMode="center"
                style={styles.image}
            />
            <Text>{choice.title || "Waiting for player"}</Text>
        </View>
    );
};

export default UserCard;
