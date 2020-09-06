/**
 * CONTEXT COMPONENT
 */

import React, { useState, useContext } from 'react';

/**
 * LANGUAGE CONTEXT
 */
const LanguageContext = React.createContext(true);
/**
 * LANGUAGE UPDATE CONTEXT
 */
const LanguageUpdateContext = React.createContext(function () { });

// hook that contains language info
export function useLanguage() {
    return useContext(LanguageContext);
}

// hook that contains function to handle language change
export function useLanguageUpdate() {
    return useContext(LanguageUpdateContext);
}

/**
 * 
 * @param {*} param0 
 * @description Context provider component
 */
export function LanguageProvider({ children }: any) {
    // language state - true = english, false = slovak
    const [enLanguage, setEnLanguage] = useState(true);

    // function, that changes language from en to sk end vice versa
    function toggleLanguage() {
        setEnLanguage(prevEnLanguage => !prevEnLanguage);
    }

    // template
    return (
        <LanguageContext.Provider value={enLanguage}>
            <LanguageUpdateContext.Provider value={toggleLanguage}>
                {children}
            </LanguageUpdateContext.Provider>
        </LanguageContext.Provider>
    )

}

