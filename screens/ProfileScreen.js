import React from 'react';
import {View, Button ,StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Avatar ,Title,Caption,TouchableRipple,Text} from 'react-native-paper';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {

    const { colors } = useTheme();
     const theme = useTheme();
    return (
        <SafeAreaView style={styles.container}>
         {/* <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/> */}
         <View style={styles.userInfoSection}>
             <View style={{flexDirection: 'row',marginTop:15}}>
                 <Avatar.Image
                 source={{
                     uri:'https://api.adorable.io/avatars/80/abott@adorable.png',
                 }}
                 size={80}/>
                 <View style={{marginLeft:20}}>
                     <Title style={styles.title, {
                         marginTop:15,
                         marginBottom:5,
                     }}>Rahul saroj </Title>
                         <Caption style={styles.caption}>@_saroj</Caption> 
                 </View>
             </View>
         </View>
         <View style={styles.userInfoSection}>
             <View style={styles.row}>
                 <Icon name="map-marker-radius" color="#777777" size={20}/>
                 <Text>   Delhi,India </Text>
             </View>
             <View style={styles.row}>
                 <Icon name="phone" color="#777777" size={20}/>
                 <Text>   +919594045984 </Text>
             </View>
             <View style={styles.row}>
                 <Icon name="email" color="#777777" size={20}/>
                 <Text>   rahulsaroj@gmail.com </Text>
             </View>
             <View style={styles.row}>
                 <Icon name="map" color="#777777" size={20}/>
                 <Text>   Delhi,India </Text>
             </View>
             <View style={styles.infoBoxWrapper}>
                 <View style={[styles.infoBox, {
                     borderRightColor:'#dddddd',
                     borderRightWidth:1,
                 }]}>
                     <Text>$140</Text>
                     <Caption>Wallets</Caption>
                 </View>
                 <View style={styles.infoBox}>
                     <Text>12</Text>
                     <Caption>Orders</Caption>
                 </View> 
             </View>
             <View style={styles.menuWrapper}>
                 <TouchableRipple onPress={() => {}}>
                     <View style={styles.menuItem}>
                         <Icon name="heart-outline" color="#FF6347" size={25}/>
                         <Text style={styles.menuItemText}>Your favourites</Text>
                     </View>
                 </TouchableRipple>
                 <TouchableRipple onPress={() => {}}>
                     <View style={styles.menuItem}>
                         <Icon name="credit-card" color="#FF6347" size={25}/>
                         <Text style={styles.menuItemText}>Payment</Text>
                     </View>
                 </TouchableRipple>
                 <TouchableRipple onPress={() => {}}>
                     <View style={styles.menuItem}>
                         <Icon name="share-outline" color="#FF6347" size={25}/>
                         <Text style={styles.menuItemText}>Tell your friends</Text>
                     </View>
                 </TouchableRipple>
                 <TouchableRipple onPress={() => {}}>
                     <View style={styles.menuItem}>
                         <Icon name="account-check-outline" color="#FF6347" size={25}/>
                         <Text style={styles.menuItemText}>Support</Text>
                     </View>
                 </TouchableRipple>
                 <TouchableRipple onPress={() => {}}>
                     <View style={styles.menuItem}>
                     <Ionicons name="settings-outline" color="#FF6347" size={25}/>
                         <Text style={styles.menuItemText}>settings</Text>
                     </View>
                 </TouchableRipple>
             </View>
             
         </View>  
      </SafeAreaView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });
