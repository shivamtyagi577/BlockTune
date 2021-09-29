import React from "react";

export const themes = {
    light: {
        theme: "#07689f",
        subTheme: "#a2d5f2",
        // theme:"#4ecca3",
        // subTheme: "#a2d5f2",
        component:{
            // backgroundColor: "#f6f6f6",
            color: "#2b2024",
            // backgroundColor: "#232931",
            backgroundColor: "000080",
            //color: "#eeeeee",
        },
        button:{
            onHover:{
                backgroundColor:"#a2d5f2",
                color:"#eeeee"
            },
            contained:{
                backgroundColor: "#07689f",
                color:"#eeee"
            },
            outlined:{
                backgroundColor:"transparent",
                color:"#eeeee"
            }
        },
        volume:{
            color:"#07689f"
        }
    },
    dark: {
        theme:"#4ecca3",
        subTheme: "#a2d5f2",
        component:{
            backgroundColor: "#232931",
            color: "#eeeeee",
        },
        button:{
            onHover:{
                backgroundColor:"#a2d5f2",
                color:"#fafafa"
            },
            contained:{
                backgroundColor: "#07689f",
                color:"black"
            },
            outlined:{
                backgroundColor:"transparent",
                color:"#fafafa"
            }
        },
        volume:{
            color:"#07689f"
        }
    }
};

export const ThemeContext = React.createContext(
    themes.light
);

/*
export const ThemeProvider = (props) => {
    const [theme,setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}*/
