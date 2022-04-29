import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function PrimaryButton({children, onPress}) {
    return (
        <View style={styles.buttonsContainer} >
            <Pressable onPress={onPress}>
                <Text style={styles.buttonText}>{ children }</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonsContainer: {
        borderRadius: 20,
        backgroundColor: 'purple',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }
});