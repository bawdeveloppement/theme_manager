import { useContext } from "react";
import { ThemeContext } from "../contexts";

export const UseTheme = () => {
    const { currentThemeId, themes } = useContext(ThemeContext)
    return themes[currentThemeId]
}