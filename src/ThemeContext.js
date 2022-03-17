import React from 'react';


export const themes = {
        plants:{
            emoji1:"🌱", emoji2:"🌿 ", emoji3:"🌳"
        },
        emoticones: {
            emoji1:"😐", emoji2:"🙂", emoji3:"🤣"
        },
        wtf: {
            emoji1:"🤖", emoji2:"💀", emoji3:"💩"
        }
}



const ThemeContext = React.createContext(themes.plants)
export default ThemeContext