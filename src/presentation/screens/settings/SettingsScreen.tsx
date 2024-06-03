import React from 'react'
import { Text, View } from 'react-native'
import { GlobalStyles } from '../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {
  const navigator = useNavigation()
  return (
    <View style = {GlobalStyles.container}>
        <Text>Settings Screen</Text>
        <PrimaryButton label = {'Regresar'} onPress={()=>navigator.goBack()}/>
        <PrimaryButton label = {'Regresar a Home'} onPress={()=>navigator.dispatch(StackActions.popToTop())}/>
    </View>
  )
}

export default SettingsScreen
