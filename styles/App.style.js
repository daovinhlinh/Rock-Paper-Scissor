import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 8,
        paddingTop: 50,
    },
    gamePrompt: {
        width: width * 0.9,
        height: 400,
        backgroundColor: "#f7f7f7",
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#000",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        shadowColor: "black",
        shadowRadius: 20,
        borderRadius: 10,
    },
    userWrapper: {
        flexDirection: "row",
        justifyContent: "center",
    },
    historyWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
    },
    result: {
        fontWeight: "bold",
        fontSize: 30,
        backgroundColor: "#fff",
        padding: 3,
        textAlign: "center",
        borderRadius: 10,
        borderWidth: 2,
    },
    gameCount: {
        fontSize: 20,
        marginTop: 10,
    },
    winRate: {
        fontSize: 17,
    },
});
