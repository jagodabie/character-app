import React, { createContext, useState, ReactNode, useContext } from 'react';
import { useFetchColor } from '../hooks/useFetchColor';

type CharacterContextProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  colorName: string;
  setColorName: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
};

const CharacterContext = createContext<CharacterContextProps | undefined>(
  undefined
);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const { colorName, setColorName, error } = useFetchColor(color);

  return (
    <CharacterContext.Provider
      value={{ name, setName, color, setColor, colorName, setColorName, error }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};
