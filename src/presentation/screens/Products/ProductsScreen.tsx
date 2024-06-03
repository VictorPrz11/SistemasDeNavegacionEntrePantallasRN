import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { GlobalStyles } from '../../theme/theme'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/StackNavigator'

const productos = [
  {id:1,name: 'Producto 1'},
  {id:2,name: 'Producto 2'},
  {id:3,name: 'Producto 3'},
  {id:4,name: 'Producto 4'},
  {id:5,name: 'Producto 5'},
  {id:6,name: 'Producto 6'},
]


const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <View style = {GlobalStyles.container}>
      <Text style={{marginBottom : 10,fontSize:30}}>Productos</Text>
      <FlatList data={productos} renderItem={({item})=><PrimaryButton label= {item.name} onPress={()=>{
        navigation.navigate('Product',{id:item.id,name:item.name})
      }}/>}></FlatList>
      <Text style={{marginBottom : 10,fontSize:30}}>Ajustes</Text>
    
      <PrimaryButton label= "Ajustes" onPress={()=>{navigation.navigate('Settings')}}/>
    </View>
    
  )
}

export default ProductsScreen
