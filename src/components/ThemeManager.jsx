import { useCallback, useContext, useMemo } from "react"
import { MODIFY_THEME, ThemeContext } from "../contexts/ThemeContext"
import { UseTheme } from "../hooks/use-theme"

export const ThemeManager = () => {
    const { themes, setCurrentThemeId, currentThemeId, dispatchThemes } = useContext(ThemeContext)
    const { borderColor, backgroundColor, textColor } = UseTheme();

    const ThemeButtons = useMemo(() => Object.keys(themes).map((t, i) => {
        console.log(themes[t].backgroundColor)
        return <button
            key={i} id={t+"#"+i}
            style={{
                backgroundColor: themes[t].backgroundColor,
                borderColor,
                borderStyle: "solid",
                marginRight: 5,
                width: "20px", 
                height: "20px",
                borderRadius: "100%"
            }}
            onClick={() => setCurrentThemeId(t)}
        ></button>
    }), [themes, setCurrentThemeId, borderColor])

    const handleChange = useCallback((ev) => {
        dispatchThemes({ type: MODIFY_THEME, payload: { id: currentThemeId, key: ev.currentTarget.name, value: ev.currentTarget.value }})
    }, [ currentThemeId, dispatchThemes]);

    const ThemeInputChangers = useMemo(() => Object.keys(themes[currentThemeId]).map((prop, i) => {
        return <div key={i} style={{ padding: "5px 5px"}}>
            <input onChange={handleChange} id={prop} name={prop} type="color" value={themes[currentThemeId][prop]} style={{ backgroundColor, borderStyle: "solid", borderRadius: "4px" }}/>
            <label htmlFor={prop} style={{ color: textColor, margin: ".4rem", font: "1rem 'Fira Sans', sans-serif"}}>{prop}</label>
        </div>
    }), [ currentThemeId, themes, handleChange, backgroundColor, textColor ])

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "250px", height: "100%", borderRight: "2px solid", borderColor,  backgroundColor: backgroundColor }}>
            <div style={{ padding: "5px", borderBottomWidth: "2px", borderColor, borderBottomStyle: "solid"}}>
                <h1 style={{ color: textColor, fontSize: "2em" }}>ThemeManager</h1>
                <div style={{ padding: "10px 5px", borderBottomWidth: 2, borderColor, display: "flex" }}>
                    {ThemeButtons}
                    <button
                        style={{
                            backgroundColor: backgroundColor,
                            borderColor,
                            borderStyle: "solid",
                            color: textColor,
                            padding: "0",
                            width: "20px", 
                            height: "20px",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            cursor: "pointer",
                            borderRadius: "100%"
                        }}
                    >+</button>  
                </div>            
            </div>
            <div style={{ padding: "5px", flex: "1" }}>
                <h1 style={{ color: textColor, fontWeight: "bold"}}>Theme { currentThemeId }</h1>
                {ThemeInputChangers}
            </div>
            <div style={{ display:"flex", padding: "10px", alignmentBaseline: "central", justifyContent: "center" }}>
                <label style={{ marginRight: "5px" }} htmlFor="extension_type">Export In </label>
                <select style={{ marginRight: "5px" }} name="extension_type" id="extension_type">
                        <option value="json">Json</option>
                        <option value="javascript">Javascript</option>
                </select>
                <button>Go</button>
            </div>
        </div>
    );
}