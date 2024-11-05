import { useState, useEffect } from 'react';

type ColorData = {
  name: {
    value: string;
  };
};

export const useFetchColor = (color: string) => {
  const [colorName, setColorName] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const fetchColorName = async () => {
        try {
          const response = await fetch(
            `https://www.thecolorapi.com/id?hex=${color.slice(1)}`
          );

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data: ColorData = await response.json();
          setColorName(data.name.value);
          setError(null);
        } catch (err) {
          console.error('Error fetching color name:', err);
          setColorName('Nieznany kolor');
          setError('Nie udało się pobrać nazwy koloru');
        }
      };

      if (color) {
        fetchColorName();
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [color]);

  return { colorName, setColorName, error };
};
