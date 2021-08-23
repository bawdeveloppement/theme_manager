import { ThemeManager } from "../components/ThemeManager";
import { UseTheme } from "../hooks/use-theme";

export default function MainTemplate () {
    const { backgroundColor, borderColor, textColor } = UseTheme();
    return (
        <div style={{ flex: "1" }}>
            <div style={{ display: "flex", justifyContent:"space-between", borderBottom: "5px solid", borderColor, backgroundColor, padding: "10px 15px", color: textColor, fontSize: "x-large" }}>
                <div id="logo" style={{ fontWeight: "bold"}}>
                    Baw
                </div>
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                    <div style={{ padding: "0px 10px"}}>Projects</div>
                    <div style={{ padding: "0px 10px"}}>Contact</div>
                </div>
            </div>
        </div>
    );
}