
import React from 'react';
import {View, Text, Button,StyleSheet ,StatusBar} from 'react-native';
import { useTheme } from '@react-navigation/native';


const DetailsScreen = ({ navigation }) => {
  const { colors } = useTheme();
    const theme = useTheme();
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Detail Screen</Text>
        <Button title="Go to details screen...again"
          onPress={() => navigation.push("Details")} />
  
        <Button title="Go to home"
          onPress={() => navigation.navigate("Home")} />
  
        <Button title="Go back"
          onPress={() => navigation.goBack()} />
  
        <Button title="Go to the first screen"
          onPress={() => navigation.popToTop()} />
      </View>
    );
  
  };
  export default DetailsScreen;

  const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});