import { createContext, useReducer, useState } from "react"
import { themes } from './themes'

const ThemeInitialState = {
    currentThemeId: "light",
    themes
}

export const CREATE_THEME = Symbol("CREATE_THEME")
export const MODIFY_THEME = Symbol("MODIFY_THEME")
export const DELETE_THEME = Symbol("DELETE_THEME")

const themesReducer = ( state = ThemeInitialState.themes, action ) => {
    switch (action.type) {
        case CREATE_THEME:
            return Object.assign({}, state, action.payload);
        case MODIFY_THEME:
            return Object.assign({}, state, { [action.payload.id]: { ...state[action.payload.id], [action.payload.key]: action.payload.value }});
        case DELETE_THEME:
            return state.filter(( _, i ) => i !== action.payload)
        default:
            return state
    }
}

const ThemeContext = createContext( ThemeInitialState );

const ThemeContextProvider = ({ children }) => {
    const [ themes, dispatchThemes ] = useReducer(themesReducer, ThemeInitialState.themes);
    const [ currentThemeId, setCurrentThemeId ]= useState(ThemeInitialState.currentThemeId);
    return (
        <ThemeContext.Provider value={{ themes, dispatchThemes, currentThemeId, setCurrentThemeId }}>
            { children }
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeContextProvider }