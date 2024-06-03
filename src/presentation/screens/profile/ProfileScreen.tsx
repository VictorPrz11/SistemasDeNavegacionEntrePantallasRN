import React from 'react'
import { View,Text, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const {top} = useSafeAreaInsets() // nos da la informacion sobre las zonas en las que se puede empezar a renderizar una aplicacion
  const navigation =  useNavigation()
  return (
    <View style = {{flex: 1, paddingHorizontal: 20, marginTop:Platform.OS == 'android' ? top + 20 : top }}>
        <Text style = {{marginBottom: 10, fontSize: 30}}>
          Profile Screen
        </Text>
        <PrimaryButton label={'Abrir menu'} onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer /* Nos abre o cierra el drawer Navigation (Menu)*/)}/>
    </View>
  )
}

export default ProfileScreen
