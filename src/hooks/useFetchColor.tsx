import { useState, useEffect } from 'react';

const useFetchColor = (color: string) => {
  const [colorName, setColorName] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColorName = async () => {
      try {
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${color.slice(1)}`
        );
        const data = await response.json();
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
  }, [color]);

  return { colorName, setColorName, error };
};

export default useFetchColor;
