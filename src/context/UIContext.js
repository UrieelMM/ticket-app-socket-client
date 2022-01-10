import React, {createContext, useState} from 'react';

export const UiContext = createContext();

const UiProvider = ({children}) => {
    //useState
    const [hiddenMenuState, setHiddenMenuState] = useState(false);

    const showMenuFunc = () => {
        setHiddenMenuState(false);
    };
    const hiddenMenuFunc = () => {
        setHiddenMenuState(true);
    };

    return (
        <UiContext.Provider
            value={{
                hiddenMenuState,
                showMenuFunc,
                hiddenMenuFunc
            }}
        >
            {children}
        </UiContext.Provider>
    );
};

export default UiProvider;
