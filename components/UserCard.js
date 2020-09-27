import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const UserCard = ({ player, choice }) => {
    return (
        <View style={styles.user}>
            <Text
                style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: 20,
                }}
            >
                {player}
            </Text>
            <Image
                source={{
                    uri:
                        choice.img ||
                        "https://cdn.connox.com/m/100030/147203/media/Magis/Tempo/Tempo-schwarz.jpg",
                }}
                style={styles.image}
            />
            <Text>{choice.title || "Waiting for player"}</Text>
        </View>
    );
};

export default UserCard;

const styles = StyleSheet.create({
    user: {
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.4,
        height: 200,
        marginTop: 30,
    },
    image: {
        width: 80,
        height: 80,
        marginTop: 30,
        backgroundColor: "#fff",
    },
});
