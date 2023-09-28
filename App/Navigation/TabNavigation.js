import { View, Text } from 'react-native'
import React from 'react'
import Fav from '../screens/Fav';
import Home from '../screens/Home';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';


export default function TabNavigation() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Fav" component={Fav}
                options={{
                    tabBarLabel: 'Fav',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={24} color="black" />),
                }}
            />
        </Tab.Navigator>
    )
}