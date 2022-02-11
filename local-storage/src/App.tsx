import React, { useEffect, useState } from 'react';
import { SettingsProvider } from './contexts/SettingsContext';
import useLocalStorage from './hooks/useLocalStorage';
import ChildComponent from './components/ChildComponent';
import ChildComponentL1 from './components/ChildComponentL1';

// Can't use useSettings here in the same function as provider
// import useSettings from './hooks/useSettings';

function App() {
    const [value, setValueInLocalStorage] = useLocalStorage('name', 'John');

    return (
        <SettingsProvider>
            <div>{value}</div>
            <div onClick={()=>setValueInLocalStorage('name of local storage is changed')}>Click to change local storage (without context)</div>
            <div onClick={()=>setValueInLocalStorage('name of local storage is modified')}>Click to change local storage 2(without context)</div>
            <ChildComponent/>
            <ChildComponentL1/>
        </SettingsProvider>
    );
}

export default App;
