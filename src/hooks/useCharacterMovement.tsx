import { useState, useEffect } from 'react';

type Position = {
  x: number;
  y: number;
};

export const useCharacterMovement = (
  initialPosition: Position = { x: 0, y: 0 }
) => {
  const [position, setPosition] = useState<Position>(initialPosition);

  const handleKeyDown = (e: KeyboardEvent) => {
    setPosition((prevPosition) => {
      const newPosition = { ...prevPosition };

      switch (e.key) {
        case 'ArrowUp':
          newPosition.y = Math.max(prevPosition.y - 10, 0);
          break;
        case 'ArrowDown':
          newPosition.y = Math.min(prevPosition.y + 10);
          break;
        case 'ArrowLeft':
          newPosition.x = Math.max(prevPosition.x - 10, 0);
          break;
        case 'ArrowRight':
          newPosition.x = Math.min(prevPosition.x + 10);
          break;
        default:
          return prevPosition;
      }

      return newPosition;
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return position;
};
