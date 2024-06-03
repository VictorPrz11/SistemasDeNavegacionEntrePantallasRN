import { DrawerActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import React from 'react'
import {Pressable, Text } from "react-native"
interface props {
    label: String
}
const HamburgerMenu = ({label}:props) => {
    const navigation = useNavigation()
 
   useEffect(() => {
    navigation.setOptions({
        headerLeft:()=>(
            <Pressable onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text>
             {label}
            </Text>
          </Pressable>
        )
    })
   }, [])
   
  return <></>
}

export default HamburgerMenu
