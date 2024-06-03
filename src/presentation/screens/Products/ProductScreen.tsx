import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text} from 'react-native'
import { RootStackParamList } from '../../routes/StackNavigator'
import { GlobalStyles } from '../../theme/theme'

const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParamList,'Product'>>().params
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({title: params.name})  
   
  }, [])
  
  return (
    <View style = {GlobalStyles.container}>
        <Text style = {{fontSize: 20, textAlign:'center',marginTop:20}}>
          {params.id} - {params.name}
        </Text>
    </View>
  )
}

export default ProductScreen
