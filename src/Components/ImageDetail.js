import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ imageSource,imageScore,title}) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text> {title}</Text>
            <Text> {imageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageDetail