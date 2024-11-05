import { Input } from '../Input/Input';
import { ColorSection } from '../ColorSection/ColorSection';
import { useCharacter } from '../../providers/CharacterProvider';

import './index.css';

export const CharacterForm: React.FC = () => {
  const { name, setName, color, setColor, colorName, error } = useCharacter();

  return (
    <form>
      <h2 className="character-form__title">Zdefiniuj postać</h2>
      <Input
        placeholder="Wpisz nazwę postaci"
        label="Nazwa postaci:"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ColorSection
        color={color}
        setColor={setColor}
        colorName={colorName}
        error={error}
        colorNameLabel={''}
      />
    </form>
  );
};
