import { useState } from "react";

import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";


function StartGameScreen({onPickNumber}) {
    
    const [userNumber, setUserNumber] = useState('');

    function inputNumberHandler(inputUserNumber) {
        setUserNumber(inputUserNumber);
    }

    function resetHandler() {
        setUserNumber('')
    }

    function confirmNumberHandler() {
        const choseNumber = parseInt(userNumber);

        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Please enter number between 1 to 99 only',
                [{text: 'Okay!', style: 'destructive', onPress: resetHandler}]
            )
            return;
        }
        onPickNumber(choseNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Opponent's Guess</Title>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter number"
                    keyboardType="number-pad"
                    autoCorrect={false}
                    maxLength={2}
                    style={styles.inputText}
                    value={userNumber}
                    onChangeText={inputNumberHandler}
                />
                <View style={styles.buttonBox}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetHandler}> Reset </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmNumberHandler}> Confirm </PrimaryButton>
                    </View>
                </View>
            </View>
            
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        padding: 24,
        alignItems: 'center',
        flex: 1
    },
    inputContainer: {
        backgroundColor: 'yellow',
        borderRadius: 5,
        padding: 12,
        marginTop: 15,
        alignItems: 'center'
    },
    inputText: {
        padding: 8,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 100,
    },
    buttonBox: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
});