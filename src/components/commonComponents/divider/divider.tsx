import React from 'react'
import { View } from 'react-native'
import style from './divider.style'

/**
 * `Divider` bileşeni, sayfa veya bileşenler arasında görsel bir ayırıcı için kullanılır.
 */
export const Divider = React.memo(() => {
  return (
    <View style={style.container}>
      <View style={style.containerWrap} />
    </View>
  )
})