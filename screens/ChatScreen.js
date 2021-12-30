import React from 'react';
import {View, Text, Button ,StyleSheet,StatusBar} from 'react-native';


const ChatScreen = () => {
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

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });
