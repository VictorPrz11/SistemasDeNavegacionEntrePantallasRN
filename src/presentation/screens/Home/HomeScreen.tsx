import React, { useEffect } from 'react'
import {  Pressable, Text, View } from 'react-native'
import { GlobalStyles } from '../../theme/theme'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'

import PrimaryButton from '../../components/shared/PrimaryButton'
import { RootStackParamList } from '../../routes/StackNavigator'

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  useEffect(() => {
    navigation.setOptions(
      {
        headerLeft: ()=>(<Pressable onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Text>Menu</Text>
        </Pressable>)
      }
    )
  }, [])
  
  return (
    <View style = {GlobalStyles.container}>
        <PrimaryButton label = "Productos" onPress = {()=>navigation.navigate('Products' as never)}/>
        <PrimaryButton label = "Settings" onPress = {()=>navigation.navigate('Settings'as never)}/>
    </View>
  )
}
export default HomeScreen