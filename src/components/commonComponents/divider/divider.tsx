import React from 'react'
import { View } from 'react-native'
import getStyles from './divider.style'

// `Divider` bileşeni, sayfa veya bileşenler arasında görsel bir ayırıcı için kullanılır.
export const Divider = React.memo(() => {

  const styles = getStyles()

  return (
    <View style={styles.container}>
      <View style={styles.dividerLine} />
    </View>
  )
})