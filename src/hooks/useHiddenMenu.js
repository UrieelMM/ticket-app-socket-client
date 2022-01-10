import {useContext, useEffect} from 'react';
import {UiContext} from "../context/UIContext";

const useHiddenMenu = (hidden) => {
    //useContext
    const {showMenuFunc, hiddenMenuFunc} = useContext(UiContext);

    //useEffect
    useEffect(() => {
        if (hidden) {
            hiddenMenuFunc();
        } else {
            showMenuFunc();
        }
    }, [hidden, hiddenMenuFunc, showMenuFunc]);
};

export default useHiddenMenu;
