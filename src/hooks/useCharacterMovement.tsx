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
    const positionChanges: Record<string, Position> = {
      ArrowUp: { x: 0, y: -10 },
      ArrowDown: { x: 0, y: 10 },
      ArrowLeft: { x: -10, y: 0 },
      ArrowRight: { x: 10, y: 0 },
    };

    if (e.key in positionChanges) {
      const change = positionChanges[e.key];
      setPosition((prevPosition) => ({
        x: Math.max(prevPosition.x + change.x, 0),
        y: Math.max(prevPosition.y + change.y, 0),
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return position;
};
