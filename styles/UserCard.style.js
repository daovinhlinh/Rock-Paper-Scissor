import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
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
        backgroundColor: "transparent",
    },
    playerName: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 20,
    },
});
