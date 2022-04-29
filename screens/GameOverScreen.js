import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';


export default function GameOverScreen({userValue, roundsNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over </Title>
            <View>
                <Text>Your value: { userValue }</Text>
                <Text>Number of Step to match: { roundsNumber}</Text>
            </View>
            <View>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    rootContainer: {
        padding: 24,
    }
});