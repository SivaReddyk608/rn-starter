import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
      <View >
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components screen"
        onPress={() => navigation.navigate('Components')}
      />
      <Button style={styles.button}
        title="This is List Screen"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="This is Image Component"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Current Count screen'
        onPress= {() => navigation.navigate('IntialCount')}
      />
      <Button
        title="Color Screen"
        onPress={() => navigation.navigate('Colors')}
      />
      <Button
        title="Square Screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Text Screen"
        onPress={() => navigation.navigate("TextInput")}
      />
       <Button
        title="Box Screen"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    marginVertical: 20,
  },
});

export default HomeScreen;
