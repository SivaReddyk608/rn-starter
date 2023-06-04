import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

// const CurentCount = () => {
//     const [counter, setCounter] = useState(0)
//     return (
//         <View>
//             <Button
//                 title='Increase Count'
//                 onPress={() =>
//                     setCounter(counter + 1)}
//             />
//             <Button
//                 title='Decrease Count'
//                 onPress={() =>
//                     setCounter(counter - 1)
//                 }
//             />
//             <Text>This is Current Count Screen: {counter}</Text>
//         </View>
//     )
// }
const reducer = (state, action) => {
    //state === {count:number}
    //action === {type: 'increment' || 'decrement'}
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement':
            return { ...state, count: state.count - action.payload }
        default:
            return state
    }
}

const CurentCount = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <View>
            <Button
                title="Increment Count"
                onPress={() => {
                    dispatch({ type: 'increment', payload: 1 })
                }} />
            <Button title="Decrement Count"
                onPress={() => {
                    dispatch({ type: 'decrement', payload: 1 })
                }} />
            <Text>This is counter screen and current count {state.count}</Text>

        </View>
    )
}

const styles = StyleSheet.create({})

export default CurentCount