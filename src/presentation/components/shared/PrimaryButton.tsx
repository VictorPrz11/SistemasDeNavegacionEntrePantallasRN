import React from 'react'
import { Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { GlobalStyles } from '../../theme/theme'


interface Props {
    label : String,
    onPress : Function

}

const PrimaryButton = ({label, onPress} : Props) => {
    const navigation = useNavigation()
  return (
        <Pressable style = {[GlobalStyles.primaryButton]} onPress={()=>onPress()}>
            <Text style = {GlobalStyles.buttonText}>{label}</Text>
        </Pressable>
  )
}

export default PrimaryButton
