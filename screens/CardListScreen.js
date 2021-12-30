import React from 'react'
import { Button } from 'react-native-paper';
import {View, Text, Button ,StyleSheet,StatusBar} from 'react-native';

const CardListScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CardListScreen</Text>
            <Button
                title="Click here"
                onPress={() => alert('button clicked')}>
            </Button>

        </View>
    )
}

export default CardListScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });
