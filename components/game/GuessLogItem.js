import { View, Text, StyleSheet } from 'react-native';

export default function GuessLogItem({roundNumber, guess}) {
    return (
        <View style={styles.itemBox}>
            <Text style={styles.itemText}>#{ roundNumber }</Text>
            <Text style={styles.itemText}>Opponent's Guess { guess }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemBox: {
        backgroundColor: 'yellow',
        borderRadius: 8,
        marginBottom: 5,
        padding: 8,
        flexDirection: 'row'
    },
    itemText: {
        flex: 1
    }
});