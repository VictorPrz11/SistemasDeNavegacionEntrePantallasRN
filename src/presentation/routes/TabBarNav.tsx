import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';
import Tab1Screen from '../screens/tabs/Tab1Screen';
// import SettingsScreen from '../screens/settings/SettingsScreen';
// import Tab2Screen from '../screens/tabs/Tab2Screen';
// import Tab3Screen from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopBarNav } from './TopBarNav';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const TabBarNav = () => {
  
  return (
    <Tab.Navigator
    sceneContainerStyle = {{
      backgroundColor: globalColors.background
    }}
    screenOptions={{
      // headerShown : false
      tabBarLabelStyle: {
        marginBottom:5

      },
      headerStyle: 
      {
        elevation : 0
      ,shadowColor:'transparent'
      }
      ,tabBarStyle:
      {
        elevation: 0 ,
        borderTopWidth: 0
      }
    }}

    >
      <Tab.Screen name="tab1" options={{
        title: 'Tab1',
        tabBarIcon:({color})=>(<Text style = {{color}}>Tab1</Text>)
      }} component={Tab1Screen} />
      <Tab.Screen name="tab2" options={{
        title: 'Tab2',
        tabBarIcon:({color})=>(<Text style = {{color}}>Tab2</Text>)
      }} component={TopBarNav} />
      <Tab.Screen name="tab3" options={{
        title: 'Tab3',
        tabBarIcon:({color})=>(<Text style = {{color}}>Tab3</Text>)
      }} component={StackNavigator} />
    </Tab.Navigator>
  )
}

export default TabBarNav
