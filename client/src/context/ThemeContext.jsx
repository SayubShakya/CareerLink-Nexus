import React, { createContext, useState, useEffect } from 'react';
import { STORAGE_KEYS, THEME_MODES } from '@/config/constants';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem(STORAGE_KEYS.THEME) || THEME_MODES.LIGHT);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === THEME_MODES.DARK) {
            root.classList.add('dark-theme');
        } else {
            root.classList.remove('dark-theme');
        }
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
    }, [theme]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
