import React from 'react'
import { FlatList,Text, StyleSheet, View } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', Age: 20 },
        { name: 'Friend #2', Age: 30},
        { name: 'Friend #3', Age: 40 },
        { name: 'Friend #4', Age: 50 },
        { name: 'Friend #5', Age: 60 },
        { name: 'Friend #6', Age: 70 },
        { name: 'Friend #7', Age: 80 },
        { name: 'Friend #8', Age: 90},
        { name: 'Friend #9', Age: 32}
    ]
    return (
        <View>
        <Text style={styles.textStyle}> This is List Screen</Text>
            <FlatList
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>{item.name} - Age {item.Age}</Text>
                }}/>
            </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 50,
        fontSize: 50,
    }

})

export default ListScreen;