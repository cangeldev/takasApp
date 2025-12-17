import React from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import { colors } from 'assets/colors/colors';
import getStyles from './nameVisibilitySectionComponent.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { updateSelectedName } from 'store/slices/authSlice';
import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Kullanıcının isim görünürlük tercihini (Ad Soyad veya Kullanıcı Adı) 
 * hem veritabanında (PostgreSQL) hem de uygulama durumunda (Redux) günceller.
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
    const token = await AsyncStorage.getItem("userToken")

    if (!token) {
      Alert.alert("Hata", "Oturum bulunamadı")
      return
    }

    const res = await axios.patch(
      "http://192.168.1.40:4000/users/update-profile",
      { selectedNameType: selectedOption.value },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    dispatch(updateSelectedName({
      selectedNameType: res.data.selectedNameType
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
