import { StyleSheet } from "react-native";

export const globalColors = {
    primary : '#7037eb',
    secondary : '#f72585',
    tertiary : '#3a0ca3',   
    success: '#4cc9f0',
    warning: '#fca311',
    danger : '#e71d36',
    dark : '#22223b',

    background : '#FFF'
}


export const GlobalStyles = StyleSheet.create({

    container: {
        padding: 20,
        flex: 1,
        backgroundColor: globalColors.background
    },

    primaryButton :{ 
        backgroundColor: globalColors.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    
    },
    buttonText:  {
        color: globalColors.background,
        fontSize: 18
    }

})