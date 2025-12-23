import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native'
import { colors } from 'assets/colors/colors'
import getStyles from './nameVisibilitySectionComponent.style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { updateSelectedName } from 'store/slices/authSlice'
import { Alert } from 'react-native'
import { updateNameVisibility } from 'api/authService'

/**
 * Kullanıcının isim görünürlük tercihini (Ad Soyad veya Kullanıcı Adı) 
 * hem veritabanında (PostgreSQL) hem de uygulama durumunda (Redux Toolkit) günceller.
 */
export const NameVisibilitySectionComponent = () => {
  const style = getStyles()
  const dispatch = useDispatch()
  const userInfo = useSelector((state: RootState) => state.auth.user)

  if (!userInfo) return null

  const nameOptions = [
    {
      label: `${userInfo.name} ${userInfo.surname}`,
      value: 'FULL_NAME'
    },
    {
      label: userInfo.username || 'Kullanıcı Adı Yok',
      value: 'USERNAME'
    }
  ]

  const initialIndex =
    nameOptions.findIndex(
      item => item.value === userInfo.selectedNameType
    ) + 1

  const handleSelection = async (selectedOption: any) => {
    try {
      updateNameVisibility(selectedOption.value)
      dispatch(updateSelectedName({
        selectedNameType: selectedOption.value
      }))

    } catch (error: any) {
      console.log(error.response?.data)
      Alert.alert("Hata", "Kaydedilemedi")
    }
  }

  return (
    <RadioButtonRN
      key={userInfo.selectedNameType}
      data={nameOptions}
      initial={initialIndex}
      selectedBtn={handleSelection}
      circleSize={14}
      box={false}
      activeColor="#02A598"
      deactiveColor={colors.tab.inactive}
      textStyle={style.textStyle}
    />
  )
}
