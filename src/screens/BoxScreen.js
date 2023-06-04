import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        flexDirection: 'row',
        height: 200,
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        marigin: 20,
        height: 100,
        width: 100
    },
    viewTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        height: 100,
        width: 100,
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        marigin: 20,
        height: 100,
        width: 100,
    }
})

export default BoxScreen