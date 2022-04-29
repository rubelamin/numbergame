import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRndNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        generateRndNumber(min, max, exclude)
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userInputValue, onGameOver }) {

    const initialGuess = generateRndNumber(1, 100, userInputValue);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userInputValue) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userInputValue, onGameOver])
    
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessNumberHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userInputValue) ||
            (direction === 'greater' && currentGuess > userInputValue)
        )
        {
            Alert.alert("Don't lie!", "You know this is wrong",
                [{ text: 'Sorry!', style: 'cancel' }]
            );
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRndNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(previuosnumber => [newRndNumber, ...previuosnumber])
    }
    

    return (
        <View style={styles.gameScreenContainer}>
            <Title>Game Screen</Title>
            <View style={styles.numberBox}>
                <Text style={styles.numberText}> { currentGuess } </Text>
            </View>
            <View style={styles.buttonBox}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessNumberHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessNumberHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => { 
                        return <GuessLogItem
                            roundNumber={guessRounds.length - itemData.index}
                            guess={itemData.item} />;
                    }}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gameScreenContainer: {
        padding: 24,
        alignItems: 'center'
    },
    numberBox: {
        padding: 24,
        marginTop: 20,
        backgroundColor: 'yellow',
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 8,
        marginBottom: 20,
    },
    numberText: {
        textAlign: 'center',
        fontSize: 24
    },
    buttonBox: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flexDirection: 'row'
    }
});