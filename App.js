import * as React from "react";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

import UserCard from "./components/UserCard";
import Choice from "./components/Choice";
import History from "./components/History";

const history1 = [];

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
    const [result, setResult] = useState("Welcome To Game");
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState(history1);
    const [didClickButton, setDidClickButton] = useState(false);
    const firstUpdate = useRef(true);

    const handleResult = (user, comp) => {
        let getResult = "";
        if (user === "Rock") {
            getResult = comp === "Scissor" ? "Victory" : "Defeat";
        }
        if (user === "Paper") {
            getResult = comp === "Rock" ? "Victory" : "Defeat";
        }
        if (user === "Scissor") {
            getResult = comp === "Paper" ? "Victory" : "Defeat";
        }
        if (user === comp) getResult = "Tie";
        setResult(getResult);
        setCount(count + 1);
    };

    const getResultColor = () => {
        if (result === "Victory") {
            return "#07da63";
        } else if (result === "Defeat") {
            return "#b53737";
        } else {
            return "gray";
        }
    };

    const input = useRef(null);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (didClickButton) {
            const random = (Math.random() * 2).toFixed(0);
            setCompWeapon(weapon[random]);
            setDidClickButton(false);
        }

        handleResult(userWeapon.title, compWeapon.title);
        if (result === "Victory") {
            // setHistory([...history], { res: "W" });
            history1.push("W");
            console.log(result);
        } else if (result === "Defeat") {
            // setHistory([...history], { res: "L" });
            history1.push("L");
            console.log(result);
        } else {
            // setHistory([...history], { res: "T" });
            history1.push("T");
            console.log(result);
        }
    }, [didClickButton]);
    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 40,
                    color: getResultColor(),
                }}
                ref={input}
            >
                {result}
            </Text>
            <View style={styles.gamePrompt}>
                <Text>Total game: {count}</Text>
                <View style={styles.userWrapper}>
                    <UserCard player="User" choice={userWeapon} />
                    <UserCard player="Comp" choice={compWeapon} />
                </View>
                <View style={styles.historyWrapper}>
                    {/* {history.map((item) => {
                        <History title={item.res} />;
                    })} */}
                </View>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text onPress={() => console.log(history1, result)}>
                    Choose your weapon
                </Text>
                {weapon.map((item) => {
                    return (
                        <Choice
                            key={item.title}
                            title={item.title}
                            handleClick={() => {
                                setUserWeapon(item);
                                setDidClickButton(true);
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
    gamePrompt: {
        width: width * 0.9,
        height: 320,
        backgroundColor: "#fff",
        marginTop: 30,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#000",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "black",
        shadowRadius: 20,
    },
    historyWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
    },
    userWrapper: {
        flexDirection: "row",
        justifyContent: "center",
    },
});
