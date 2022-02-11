import { ReactNode, createContext } from 'react';
// hooks
import useLocalStorage from '../hooks/useLocalStorage';


const initialState = {
    param: 'defaultValueOfParam',
    onChangeParam: (value: string) => {}, // this is a default function, main function is declared in the provider
};

const SettingsContext = createContext(initialState);

function SettingsProvider({ children }: {children: ReactNode}) {
  const [settings, setSettings] = useLocalStorage('settings', {
    param: initialState.param,
  });

  const onChangeParam = (value: string) => {
    setSettings({
        param: value,
    });
  };


  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onChangeParam,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
