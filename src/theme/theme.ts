import AsyncStorage from "@react-native-async-storage/async-storage"
import colors from "assets/colors/colors"
import { Appearance } from "react-native"
import { setTheme } from "store/slices/themeSlice"

// Tema değiştirme fonksiyonu
export const handleThemeChange = async (theme: any, dispatch: any) => {
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
  backgroundColor: colors.lightBackground,
  textColor: colors.lightText,
  dividerColor: colors.lightDivider,
  profileTextColor: colors.lightText
}

export const darkTheme = {
  backgroundColor: colors.darkBackground,
  textColor: colors.darkText,
  dividerColor: colors.darkDivider,
  profileTextColor: colors.darkText
}