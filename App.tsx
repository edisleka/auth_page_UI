import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import SignIn from './sign-in'
import { useState } from 'react'

export default function App() {
  const [routes, setRoutes] = useState('Onboarding')

  return (
    <View style={{ flex: 1 }}>{routes === 'Onboarding' && <SignIn />}</View>
  )
}

const styles = StyleSheet.create({})
