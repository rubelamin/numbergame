import { View, Text, StyleSheet } from "react-native";

export default function Title({children}) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{ children }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 6,
        justifyContent: 'center',
        textAlign: 'center'
    },
    titleText: {
        color: 'red',
        fontSize: 24,
        textAlign: 'center'
    }
});