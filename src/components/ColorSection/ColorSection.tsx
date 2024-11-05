import { ColorPicker } from '../ColorPicker/ColorPicker';

import './index.css';

type ColorSectionProps = {
  color: string;
  setColor: (color: string) => void;
  colorName: string;
  colorNameLabel: string;
  error: string | null;
};

export const ColorSection = ({
  color,
  setColor,
  colorName,
  error,
}: ColorSectionProps) => (
  <div className="color-section__container">
    <ColorPicker
      color={color}
      label="Wybierz kolor postaci: "
      onColorChange={setColor}
      colorName={colorName}
      colorNameLabel="Nazwa koloru"
      error={error}
    />
  </div>
);
