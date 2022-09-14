import React, {useState, useEffect} from 'react';

const darkThemeContext = React.createContext();
const mainColors = [
    {bg: '#fff', txt: '#000'},
    {bg: '#000', txt: '#fff'}
];

const DarkThemeProvider = ({children}) => {
    const [turnOn, setTurnOn] = useState(false);
    const [mainColor, setMainColor] = useState(mainColors[0]);

    useEffect(() => {
        const color = turnOn ? mainColors[0] : mainColors[1];
        setMainColor(color);
    }, [turnOn]);

    return (
        <darkThemeContext.Provider
        value={{ turnOn, setTurnOn, mainColor, setMainColor }}
        >
            {children}
        </darkThemeContext.Provider>
    );
};

export {darkThemeContext, DarkThemeProvider};