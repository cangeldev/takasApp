import AsyncStorage from "@react-native-async-storage/async-storage"
import { colors } from 'assets/colors/colors'
import { Appearance } from "react-native"
import { setTheme } from "store/slices/themeSlice"
import { AppDispatch } from "store/store"
import { Theme } from "utils/types"

// Tema değiştirme fonksiyonu
export const handleThemeChange = async (theme: Theme | "default", dispatch: AppDispatch) => {
  try {
    const systemTheme = Appearance.getColorScheme() || "light"
    const newTheme = theme === "default" ? systemTheme : theme
    dispatch(setTheme(newTheme))
    await AsyncStorage.setItem("theme", newTheme)
  } catch (error) {
    console.error("Tema kaydetme hatası:", error)
  }
}

export const lightTheme = {
  backgroundColor: colors.background.light,
  textColor: colors.background.dark,
  dividerColor: colors.border.lightDivider,
  profileTextColor: colors.background.dark
}

export const darkTheme = {
  backgroundColor: colors.background.dark,
  textColor: colors.background.light,
  dividerColor: colors.border.darkDivider,
  profileTextColor: colors.background.light
}