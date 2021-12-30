
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import { IconButton, useTheme } from 'react-native-paper';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  colors, { Colors }  from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import { View } from 'react-native-animatable';
import EdifProfileScreen from './EdifProfileScreen';
import NotificationScreen  from './NotificationScreen';
// import { Avatar, useTheme } from 'react-native-paper';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Notificationstack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#259eff',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsStackScreen}
        options={{
          tabBarLabel: 'notifications',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#ff6666',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#23527c',
          tabBarIcon: ({ color }) => (
            <Icon name="aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

  )
}
export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleColor: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: 'OverView',
        headerLeft: () => (
          <IconButton icon="menu" size={25}
            backgroundColor="#009387" onPress={() => navigation.openDrawer()}> </IconButton>
        )
      }} />
    </HomeStack.Navigator>
  );

};
const DetailsStackScreen = () => {

  return (
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#259eff',
      },
      headerTintColor: '#fff',
      headerTitleColor: {
        fontWeight: 'bold'
      }
    }}>

      <DetailsStack.Screen name="Details" component={DetailsScreen}
        options={{
          title: 'Details'
        }} />

    </DetailsStack.Navigator>


  );
};


const NotificationsStackScreen = ({navigation}) => (
  <Notificationstack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <Notificationstack.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
            />
          
          ),
        }}
        />
  </Notificationstack.Navigator>
);

// const NotificationsStackScreen = (navigation) => {
//   const {colors} = useTheme();

//   return (
//     <Notificationstack.Navigator screenOptions={{
//       headerStyle: {
//         backgroundColor: '#259eff',
//       },
//       headerTintColor: '#fff',
//       headerTitleColor: {
//         fontWeight: 'bold'
//       }
//     }}>

//       <Notificationstack.Screen name="notifications" component={NotificationScreen}
//         options={{
//           title: 'notifications'
//         }} />

//     </Notificationstack.Navigator>


//   );
// };

const ProfileStackScreen = ({ navigation }) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation : 0
        },
        headerTintColor: colors.text,
        // headerTitleColor: {
        //   fontWeight: 'bold'
        // }
      }}>

      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#1f65ff"
                onPress={() => navigation.openDrawer()} />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor="#fff"
                color="black"
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EdifProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};


