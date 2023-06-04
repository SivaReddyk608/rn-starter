import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { set } from 'react-native-reanimated'

const TextScreen = () => {
    const[password, setPassword] = useState('')

    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput 
            style = {styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
            />
            {password.length < 5 ? <Text>Password must be greater than 5</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 20,
        borderColor: 'black',
        borderWidth: 2,
        height: 50
    }
})

export default TextScreen