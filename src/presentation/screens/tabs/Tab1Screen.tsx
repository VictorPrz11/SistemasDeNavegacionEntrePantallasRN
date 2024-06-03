import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import HamburgerMenu from '../../components/shared/HamburgerMenu'

const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu label ={"MENU"} />
    </View>
  )
}

export default Tab1Screen

