import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi, Busayo</Text>
        <Text style={styles.welcomeMessage}>Lets help you find a perfect job</Text>
        <Text></Text>
      </View>
      <View style={styles.searchContainer}>
        <View style= {styles.searchWrapper}>
          <TextInput style= {styles.searchInput} />
        </View>
      </View>
    </View>
  )
}

export default Welcome