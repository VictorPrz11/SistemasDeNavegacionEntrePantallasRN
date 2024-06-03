import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { View, useWindowDimensions } from 'react-native';
import TabBarNav from './TabBarNav';


const Drawer = createDrawerNavigator();

export const  DrawerNavigation = ()=>{
  const dimensions = useWindowDimensions()
  return (
    <Drawer.Navigator 
    drawerContent={(props) => <CustomDrawerContent {...props}/>}

      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width>= dimensions.height ? 'permanent': 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle:{
          borderRadius: 10,

        }

      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={TabBarNav} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props : DrawerContentComponentProps)=>
  {
    return(
      <DrawerContentScrollView>
       <View style = {{
        height : 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50
       }}/>
       <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    )
  }