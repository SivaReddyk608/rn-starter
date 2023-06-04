import react from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {

    const name = "Sivan"
    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native!</Text>
            <Text style={styles.nameTextSize}>My Name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    nameTextSize: {
        fontSize: 20,
    }
})

export default ComponentsScreen;
