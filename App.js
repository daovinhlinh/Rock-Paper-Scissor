import * as React from "react";
import { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
} from "react-native";

// You can import from local files

import Weapon from "./Weapon";

// or any pure javascript modules available in npm

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

export default function App() {
    const [weapon, setWeapon] = useState([
        {
            title: "Rock",
            img:
                "https://images.homedepot-static.com/productImages/94af8836-0338-4802-914e-04cc71e562ad/svn/backyard-x-scapes-fake-rocks-hdd-rof-rocsb-64_1000.jpg",
        },
        {
            title: "Paper",
            img:
                "https://image.shutterstock.com/image-vector/papers-cartoon-vector-illustration-black-260nw-547625740.jpg",
        },
        {
            title: "Scissor",
            img:
                "https://homedepot.scene7.com/is/image/homedepotcanada/p_1001552153.jpg ",
        },
    ]);

    const [userWeapon, setUserWeapon] = useState([]);
    const [compWeapon, setCompWeapon] = useState([]);

    useEffect(() => {
        const random = (Math.random() * 2).toFixed(0);
        setCompWeapon(weapon[random]);
    }, [userWeapon]);
    return (
        <View style={styles.container}>
            <View style={styles.gamePrompt}>
                <UserCard player="User" choice={userWeapon} />
                <UserCard player="Comp" choice={compWeapon} />
            </View>
            <View style={{ alignItems: "center" }}>
                <Text>Choose your weapon</Text>
                {weapon.map((item) => {
                    return (
                        <Weapon
                            key={item.title}
                            title={item.title}
                            handleClick={() => {
                                setUserWeapon(item);
                            }}
                        />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 8,
        paddingTop: 50,
        backgroundColor: "#f5f5f5",
    },
    buttonWrapper: {
        alignItems: "center",
    },
    gamePrompt: {
        width: width * 0.8,
        height: 400,
        backgroundColor: "#fff",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    user: {
        alignItems: "center",
        width: width * 0.4,
        height: 250,
        marginTop: 80,
    },
    image: {
        width: 80,
        height: 80,
        marginTop: 30,
    },
});
