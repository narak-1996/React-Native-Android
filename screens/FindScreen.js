import React from 'react';
import {View, Text, Button ,StyleSheet,StatusBar} from 'react-native';

const FindScreen = ({navigation}) => {
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

export default FindScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });
