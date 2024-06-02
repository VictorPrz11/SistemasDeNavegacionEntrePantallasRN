import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { GlobalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import ProductScreen from '../Products/ProductScreen'

const HomeScreen = () => {


  const navigation = useNavigation()
  return (
    <View style = {GlobalStyles.container}>
        <Pressable style = {GlobalStyles.primaryButton} onPress={()=>navigation.navigate('Products' as never)}>
          <Text style = {GlobalStyles.buttonText}>Productos</Text>
        </Pressable>
    </View>
  )
}

export default HomeScreen
