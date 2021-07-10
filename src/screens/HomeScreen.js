import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation, route}) => {
    return (
      <View style={styles.mainView}>
        <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => {navigation.navigate("Details"),{screenNumber:1}}}/>
            <TouchableOpacity>
            onPress={() => {navigation.navigate("BigImageView"),{screenNumber:1}}}>
            <View>
              <Text>
                Go to big screen
              </Text>
            </View>
            </TouchableOpacity>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default HomeScreen;