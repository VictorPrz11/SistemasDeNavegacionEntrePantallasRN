import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './presentation/routes/StackNavigator';
import { DrawerNavigation } from './presentation/routes/DrawerNavigation';
import TabBarNav from './presentation/routes/TabBarNav';
const App = () => {
  return (
    <NavigationContainer>
     <DrawerNavigation/>
     {/* <TabBarNav/> */}
    </NavigationContainer>
  )
}

export default App
