import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = (navigation) => {
    return (
        <View>
            <Text>This is ImageScreen</Text>
            <ImageDetail
                title="Forest"
                imageSource={require('../../assets/forest.jpg')}
                imageScore="Image Score -7"
            />
            <ImageDetail
                title="Beach"
                imageSource={require('../../assets/beach.jpg')}
                imageScore="Image Score -7"
            />
            <ImageDetail
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
                imageScore="Image Score -4"
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen