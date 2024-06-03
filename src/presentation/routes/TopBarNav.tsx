import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AboutScreen from '../screens/about/AboutScreen';
import HamburgerMenu from '../components/shared/HamburgerMenu';

const Tab = createMaterialTopTabNavigator();
export const TopBarNav = () => {
  return (
    <>
      <HamburgerMenu label = {"MENU"}/>
    <Tab.Navigator screenOptions={{
        tabBarStyle: {
            
        }
    }}>
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="About" component={AboutScreen} />
  </Tab.Navigator>
        </>
  )
}
