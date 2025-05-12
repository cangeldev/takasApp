import { useSelector } from "react-redux"
import { RootState } from "src/store/store"
import { lightTheme, darkTheme } from "theme/theme"

//Bu bileşen  uygulama içinde kullanılacak tema ayarlarını yapmak amaçlı oluşturulmuş bir hook yapısıdır.
export const useTheme = () => {
    const selectedTheme = useSelector((state: RootState) => state.theme.theme)
    return selectedTheme === "light" ? lightTheme : darkTheme
}