import './index.css';

type CharacterProps = {
  name: string;
  color: string;
  position: { x: number; y: number };
};

export const Character: React.FC<CharacterProps> = ({
  name,
  color,
  position,
}) => (
  <div
    className="character__container"
    style={{
      left: position.x,
      top: position.y,
    }}
  >
    <p className="character__name">{name || 'Wpisz nazwę postaci'}</p>
    <div
      className="character__avatar"
      style={{
        backgroundColor: color || 'black',
      }}
    ></div>
  </div>
);
