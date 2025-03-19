import { useSelector } from "react-redux"
import { RootState } from "features/reduxToolkit/store"
import { lightTheme, darkTheme } from "utils/theme"

/*
 Bu bileşen  uygulama içinde kullanılacak tema ayarlarınıyapmak amaçlı oluşturulmuş bir hook yapısıdır.
*/
export const useTheme = () => {
    const selectedTheme = useSelector((state: RootState) => state.themes.ThemeInfo.theme)
    return selectedTheme === "light" ? lightTheme : darkTheme
}