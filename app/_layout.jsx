import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { Slot, SplashScreen, Stack } from 'expo-router'
import {useFonts} from 'expo-font'

const RootLayout = () => {

const [fontsLoaded, error] = useFonts ({
  "Matemasie-Regular": require("../assets/font/Matemasie-Regular.ttf"),
});

useEffect(() => {
if(error) throw error;

if(fontsLoaded) SplashScreen.hideAsync();
},[fontsLoaded, error])

if(!fontsLoaded && !error) return null;


  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}/>
    </Stack>
  )
  
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})