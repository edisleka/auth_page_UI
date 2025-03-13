import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.languageContainer}>
        <Text style={styles.languageText}>English</Text>
        <Ionicons name='chevron-down' size={16} color='black' />
      </TouchableOpacity>
      <Text style={styles.title}>Sign In to recharge Direct</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter Email'
          placeholderTextColor={'#B0B0B0'}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {email.length > 0 && (
          <TouchableOpacity
            onPress={() => setEmail('')}
            style={styles.clearIcon}
          >
            <Ionicons name='close' size={20} color='#B0B0B0' />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor={'#B0B0B0'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword ? true : false}
        />
        {password.length > 0 && (
          <TouchableOpacity
            onPress={() => setPassword('')}
            style={styles.clearIcon}
          >
            <Ionicons name='close' size={20} color='#B0B0B0' />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() =>
            setShowPassword((prevShowPassword) => !prevShowPassword)
          }
          style={{ marginLeft: 10 }}
        >
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={20}
            color='#B0B0B0'
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.recoverPasswordContainer}>
        <Text style={styles.textRecoverPasswordContainer}>
          Recover Password ?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          color: '6b7280',
          fontSize: 16,
          marginVertical: 25,
        }}
      >
        Or countinue with
      </Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/apple.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/facebook.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            marginTop: 25,
            marginHorizontal: 30,
            fontWeight: '400',
            color: '#000',
          }}
        >
          if you don't have an account you can
          <Text style={styles.registerText}> Register here!</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 24,
    paddingTop: 140,
  },
  languageContainer: {
    position: 'absolute',
    top: 70,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 14,
    color: 'black',
    marginRight: 4,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'white',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1c1c1c',
    paddingVertical: 15,
  },
  clearIcon: {
    marginLeft: 10,
    padding: 2,
    backgroundColor: '#1c1c1c',
    borderRadius: 50,
  },
  recoverPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  textRecoverPasswordContainer: {
    color: '#9ca3af',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#4461f2',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  socialButton: {
    width: 80,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000100',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  registerText: {
    color: '#4f46e5',
    fontWeight: '600',
  },
})
