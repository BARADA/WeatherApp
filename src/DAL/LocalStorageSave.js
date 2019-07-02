import React from 'react';


export const LocalStorageSave = localStorageKey => {
    const [state, setState] = React.useState(
        JSON.parse(localStorage.getItem(localStorageKey)) || '');
    React.useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey]);
    return [state, setState];
};
export const LocalStorageSaveAPI = localStorageKey => {
    const [state, setState] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );
    localStorage.setItem(localStorageKey, state);
    return [state, setState];
};