
import React from 'react';
import {View, Text, Button ,StyleSheet, StatusBar} from 'react-native';
import { useTheme } from '@react-navigation/native';

const SettingScreens = () => {

    const { colors } = useTheme();
    const theme = useTheme();
    return (
        <View style={styles.container}>
             <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Setting  Screen</Text>
        <Button title="This is Setting screen"
          onPress={() => navigation.navigate("Details")} />
      </View>
    )
}

export default SettingScreens;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
