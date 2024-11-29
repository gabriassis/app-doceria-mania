import { StyleSheet, View, Animated, NativeModules, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useRef } from 'react'
import { Container } from 'src/styles/basic'
import { StackActions } from '@react-navigation/native'

export const Intro = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current


  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start()
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'))
      navigation.navigate('Login')
    }, 2000)
  }, [fadeAnim])

  return (
    <>
      <Container>
        <LinearGradient style={styles.background} colors={['#ffffff', '#DECDB3']}>
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ scale: fadeAnim }],
            }}
          >
            <View>
              <Image
                source={require('./../assets/img/logo2.jpg')}
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </Animated.View>
        </LinearGradient>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
