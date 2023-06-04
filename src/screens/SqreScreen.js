import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const COLOR_INCREMENT = 15

const SqreScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        //color === red, green, blue
        //change === +15, -15

        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;

        }
    }

    console.warn(red, blue, green)
    return (
        <View>
            <Text>This is square screen</Text>
            <ColorCounter
                color="Red"
                onIncrement={() => { setColor('red', COLOR_INCREMENT) }}
                onDecrement={() => { setColor('red', -1 * COLOR_INCREMENT) }}
            />
            <ColorCounter
                color="Green"
                onIncrement={() => { setColor('green', COLOR_INCREMENT) }}
                onDecrement={() => { setColor('green', -1 * COLOR_INCREMENT) }}
            />
            <ColorCounter
                color="Blue"
                onIncrement={() => { setColor('blue', COLOR_INCREMENT) }}
                onDecrement={() => { setColor('blue', -1 * COLOR_INCREMENT) }}
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SqreScreen