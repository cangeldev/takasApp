import { useSelector } from "react-redux"
import { RootState } from "features/reduxToolkit/store"
import { lightTheme, darkTheme } from "utils/theme"

export const useTheme = () => {
    const selectedTheme = useSelector((state: RootState) => state.themes.ThemeInfo.theme)
    return selectedTheme === "light" ? lightTheme : darkTheme
}