import { useCharacterMovement } from '../../hooks/useCharacterMovement';
import { useCharacter } from '../../providers/CharacterProvider';
import { Character } from './Character/Character';

import './index.css';

export const Map: React.FC = () => {
  const { name, color } = useCharacter();
  const position = useCharacterMovement();
  return (
    <div
      className="map"
      style={{
        height: `${Math.max(position.y + 50, 100)}px`,
      }}
    >
      {name && color && (
        <Character name={name} color={color} position={position} />
      )}
    </div>
  );
};
