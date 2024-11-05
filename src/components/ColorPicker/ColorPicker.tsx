import { TextWithError } from '../TextWithError/TextWithError';

import './index.css';

type ColorPickerProps = {
  color: string;
  label: string;
  onColorChange: (color: string) => void;
  colorName: string;
  colorNameLabel: string;
  error: string | null;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  label,
  onColorChange,
  colorName,
  error,
}) => (
  <div className="color-picker__container">
    <label>{label}</label>
    <div className="color-picker__input-wrapper">
      <input
        type="color"
        value={color}
        onChange={(e) => onColorChange(e.target.value)}
      />
      <TextWithError text={colorName} error={error} />
    </div>
  </div>
);
