import React from "react";
import { useState } from "react";
import { Text, View, Image, Dimensions, ImageBackground } from "react-native";

import UserCard from "./components/UserCard";
import Choice from "./components/Choice";
import History from "./components/History";
import styles from "./styles/App.style";

const matchHistory = [];

export default function App() {
    const [weapon, setWeapon] = useState([
        {
            title: "Rock",
            img:
                "https://www.pngitem.com/pimgs/m/212-2122744_rock-paper-scissors-clipart-png-download-rock-paper.png",
        },
        {
            title: "Paper",
            img:
                "https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png",
        },
        {
            title: "Scissor",
            img:
                "https://www.kindpng.com/picc/m/502-5025731_scissors-clipart-png-download-rock-paper-scissors-clipart.png",
        },
    ]);

    const [userWeapon, setUserWeapon] = useState([]);
    const [compWeapon, setCompWeapon] = useState([]);
    const [winCount, setWinCount] = useState(0);
    const [loseCount, setLoseCount] = useState(0);
    const [result, setResult] = useState();
    const [gameCount, setGameCount] = useState(0);

    const getResultColor = (result) => {
        if (result === "Win") {
            return "#07da63";
        } else if (result === "Lose") {
            return "#b53737";
        } else {
            return "gray";
        }
    };

    const getRoundOutcome = (userChoice) => {
        const random = Math.floor(Math.random() * 3);
        const compChoice = weapon[random];
        let result = "";
        if (userChoice.title === "Rock") {
            result = compChoice.title === "Scissor" ? "Win" : "Lose";
        }
        if (userChoice.title === "Paper") {
            result = compChoice.title === "Rock" ? "Win" : "Lose";
        }
        if (userChoice.title === "Scissor") {
            result = compChoice.title === "Paper" ? "Win" : "Lose";
        }
        if (userChoice.title === compChoice.title) result = "Tie";
        return [result, compChoice];
    };

    const onPress = (userChoice) => {
        const [choiceResult, compChoice] = getRoundOutcome(userChoice);
        const newUserChoice = weapon.find(
            (item) => item.title === userChoice.title
        );
        const newCompChoice = weapon.find(
            (item) => item.title === compChoice.title
        );
        setResult(choiceResult);
        setUserWeapon(newUserChoice);
        setCompWeapon(newCompChoice);
        setGameCount(gameCount + 1);
        if (choiceResult === "Win") setWinCount(winCount + 1);
        if (choiceResult === "Lose") setLoseCount(loseCount + 1);
        if (matchHistory.length < 10) {
            matchHistory.push({
                result: choiceResult.charAt(0),
                color: getResultColor(choiceResult),
            });
        } else {
            matchHistory.shift();
            matchHistory.push({
                result: choiceResult.charAt(0),
                color: getResultColor(choiceResult),
            });
        }
    };

    const getWinRate = () => {
        return Math.floor((winCount / gameCount) * 100);
    };

    return (
        <ImageBackground
            source={{
                uri:
                    "https://previews.123rf.com/images/azaman357/azaman3571702/azaman357170200001/70959068-comic-book-versus-background-two-heroes-battle-action-intro-halftone-texture.jpg",
            }}
            resizeMode="stretch"
            style={styles.container}
        >
            <Text style={[styles.result, { color: getResultColor(result) }]}>
                {result || "Welcome To Game"}
            </Text>
            <View style={styles.gamePrompt}>
                <Text style={styles.gameCount}>Total game: {gameCount}</Text>
                <Text style={styles.winRate}>
                    Win: {winCount} Lose: {loseCount} Tie:{" "}
                    {gameCount - winCount - loseCount}
                </Text>
                <Text style={styles.winRate}>
                    Winrate: {getWinRate() || "0"}%
                </Text>
                <View style={styles.userWrapper}>
                    <UserCard player="User" choice={userWeapon} />
                    <UserCard player="Comp" choice={compWeapon} />
                </View>
                <View style={styles.historyWrapper}>
                    {matchHistory.map((item, index) => {
                        const { result, color } = item;
                        return (
                            <History
                                key={index}
                                background={color}
                                title={result}
                            />
                        );
                    })}
                </View>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Choose your weapon
                </Text>
                {weapon.map((item) => {
                    return (
                        <Choice
                            key={item.title}
                            title={item.title}
                            handleClick={() => {
                                onPress(item);
                            }}
                        />
                    );
                })}
            </View>
        </ImageBackground>
    );
}
